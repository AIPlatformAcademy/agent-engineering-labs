export class ApplicationError extends Error {
  constructor(code, message, statusCode) {
    super(message);

    this.name = 'ApplicationError';
    this.code = code;
    this.statusCode = statusCode;
  }
}