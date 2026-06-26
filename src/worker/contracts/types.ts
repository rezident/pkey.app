export type Contracts = typeof import('./index').contracts;
export type Contract = Record<string, (...args: any[]) => unknown>
export type ContractName = keyof Contracts;
