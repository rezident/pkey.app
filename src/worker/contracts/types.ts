export type Contracts = typeof import('./index').contracts;
export type Contract = Record<string, (...args: unknown[]) => unknown>;
export type ContractName = keyof Contracts;
