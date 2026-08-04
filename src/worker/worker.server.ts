import { contracts } from './contracts';
import type { Contract } from './contracts/types';
import type { RequestMessage, ResponseMessage } from './types';

const createResponseMessage = (
    uuid: string,
    type: 'resolve' | 'reject',
    result: unknown,
): ResponseMessage => ({
    uuid,
    type,
    result,
});

self.onmessage = async (event: MessageEvent<RequestMessage>) => {
    const { contractName, method, args, uuid } = event.data;
    const contract: Contract = contracts[contractName];

    try {
        const handler = contract[method] as (...args: unknown[]) => unknown;
        self.postMessage(createResponseMessage(uuid, 'resolve', await handler(...args)));
    } catch (e) {
        self.postMessage(createResponseMessage(uuid, 'reject', String(e)));
    }
};
