import type { StateCreator } from 'zustand';

import { worker } from '~/worker/worker';

export interface DatabaseSlice {
    database: {
        status?: Awaited<ReturnType<typeof worker.database.getStatus>>;
        operation?: 'CHECKING';

        fetchStatus: VoidFunction;
    };
}

const update = (
    set: Parameters<StateCreator<DatabaseSlice>>[0],
    data: Partial<DatabaseSlice['database']>,
) => {
    set(({ database }) => ({ database: { ...database, ...data } }));
};

export const createDatabaseSlice: StateCreator<DatabaseSlice> = (set) => ({
    database: {
        fetchStatus: async () => {
            update(set, { operation: 'CHECKING' });
            update(set, { operation: undefined, status: await worker.database.getStatus() });
        },
    },
});

export const getFetchStatus = ({ database }: DatabaseSlice) => database.fetchStatus;
export const getStatus = ({ database }: DatabaseSlice) => database.status;
export const getOperation = ({ database }: DatabaseSlice) => database.operation;
