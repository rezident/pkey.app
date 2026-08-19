import { create } from 'zustand';

import { createDatabaseSlice, type DatabaseSlice } from '~/store/slices/database';

type StoreState = DatabaseSlice;

export const useStore = create<StoreState>()((...args) => ({
    ...createDatabaseSlice(...args),
}));
