import { database } from '~/worker/contracts/database';

import type { Contract } from './types';

export const contracts = { database } satisfies Record<string, Contract>;
