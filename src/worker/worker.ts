import type { Contracts } from './contracts/types';

import type { AsyncGateway, PromiseResolvers, RequestMessage, ResponseMessage } from './types';
import type { ContractName } from './contracts/types';

const workerServer = new Worker(new URL('./worker.server.ts', import.meta.url), { type: 'module' });
const pendingPromises = new Map<string, PromiseResolvers>();

const createRequestMessage = (contractName: ContractName, method: string, args: unknown[]): RequestMessage => ({
    uuid: crypto.randomUUID(),
    contractName,
    method,
    args,
});

const postMessage = (contractName: ContractName, method: string, args: unknown[]) => {
    return new Promise((resolve, reject) => {
        const message = createRequestMessage(contractName, method, args);
        pendingPromises.set(message.uuid, { resolve, reject });
        workerServer.postMessage(message);
    });
};

const createContractProxy = (contractName: ContractName) => {
    return new Proxy({} as any, {
        get: (__, method) => (...args: unknown[]) => postMessage(contractName, String(method), args),
    });
};

const createContractsProxy = <T extends object>(): AsyncGateway<T> => {
    return new Proxy({} as any, { get: (_, apiName) => createContractProxy(String(apiName) as ContractName) });
};

workerServer.onmessage = (event: MessageEvent<ResponseMessage>) => {
    const { uuid, type, result } = event.data;
    const pendingPromise = pendingPromises.get(uuid);

    if (!pendingPromise) return;
    pendingPromises.delete(uuid);

    const { resolve, reject } = pendingPromise;
    if (type === 'resolve') {
        return resolve(result);
    }

    reject(new Error(String(result)));
};

export const worker = createContractsProxy<Contracts>();
