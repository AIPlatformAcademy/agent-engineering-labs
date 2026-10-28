import express from 'express';
import { studentRouter } from './routes/student.routes.js';
import { transferRouter } from './routes/transfer.routes.js';
import { requestId } from './middleware/request-id.js';
import { developmentCors } from './middleware/cors.js';
import { notFound } from './middleware/not-found.js';
import { errorHandler } from './middleware/error-handler.js';

export function createApp() {
  const app = express();

  app.use(developmentCors);
  app.use(express.json());
  app.use(requestId);

  app.get('/health', (req, res) => {
    return res.status(200).json({
      status: 'UP',
      service: 'unipay-api'
    });
  });

  app.use(
    '/api/students',
    studentRouter
  );

  app.use(
    '/api/transfers',
    transferRouter
  );

  app.use(notFound);
  app.use(errorHandler);

  return app;
}