import { create } from 'zustand';

import { createDatabaseSlice, type DatabaseSlice } from '~/store/slices/database';
import { createNavigationSlice, type NavigationSlice } from '~/store/slices/navigation';

type StoreState = DatabaseSlice & NavigationSlice;

export const useStore = create<StoreState>()((...args) => ({
    ...createDatabaseSlice(...args),
    ...createNavigationSlice(...args),
}));
