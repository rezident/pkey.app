import { create } from 'zustand';

type StoreState = object;

export const useStore = () => create<StoreState>()(() => ({}));
