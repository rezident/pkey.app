import type { StateCreator } from 'zustand';

import type { worker } from '~/worker/worker';

export interface DatabaseSlice {
    database: {
        status?: Awaited<ReturnType<typeof worker.database.getStatus>>;
    };
}
export const createDatabaseSlice: StateCreator<DatabaseSlice> = () => ({
    database: {},
});
