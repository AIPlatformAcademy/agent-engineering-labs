import {
  ApplicationError
} from '../errors/application-error.js';

export function errorHandler(error, req, res, _next) {
  if (error instanceof ApplicationError) {
    return res.status(error.statusCode).json({
      error: {
        code: error.code,
        message: error.message,
        requestId: req.requestId
      }
    });
  }

  return res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: 'An unexpected error occurred',
      requestId: req.requestId
    }
  });
}