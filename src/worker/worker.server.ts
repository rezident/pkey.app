import type { RequestMessage, ResponseMessage } from './types';
import { contracts } from './contracts';
import type { Contract } from './contracts/types';

const createResponseMessage = (uuid: string, type: 'resolve' | 'reject', result: unknown): ResponseMessage => ({
    uuid,
    type,
    result,
});

self.onmessage = (async (event: MessageEvent<RequestMessage>) => {
    const { contractName, method, args, uuid } = event.data;
    const contract: Contract = contracts[contractName];

    try {
        self.postMessage(createResponseMessage(uuid, 'resolve', await contract[method](...args)));
    } catch (e) {
        self.postMessage(createResponseMessage(uuid, 'reject', String(e)));
    }
});
