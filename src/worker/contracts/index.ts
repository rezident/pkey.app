import { db } from './db';
import type { Contract } from './types';

export const contracts = { db } satisfies Record<string, Contract>;
