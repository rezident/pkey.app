import type { ContractName } from './contracts/types';

export interface PromiseResolvers {
    resolve: (value: unknown) => void;
    reject: (value?: unknown) => void;
}

export interface RequestMessage {
    uuid: string;
    contractName: ContractName;
    method: string;
    args: unknown[];
}

export interface ResponseMessage {
    uuid: string;
    type: keyof PromiseResolvers;
    result: unknown;
}

export type AsyncGateway<T> = {
    [Entity in keyof T]: {
        [Method in keyof T[Entity]]: T[Entity][Method] extends (...args: infer Args) => infer Return
            ? (...args: Args) => Return extends Promise<any> ? Return : Promise<Return>
            : never;
    }
};

