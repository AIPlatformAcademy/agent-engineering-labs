import { Router } from 'express';

import {
  listTransfers,
  postTransfer
} from '../controllers/transfer.controller.js';

export const transferRouter = Router();

transferRouter.get(
  '/',
  listTransfers
);

transferRouter.post(
  '/',
  postTransfer
);