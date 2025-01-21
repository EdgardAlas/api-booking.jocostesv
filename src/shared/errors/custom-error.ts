export class CustomError extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode: number
  ) {
    super(message);
    this.name = 'CustomError';
  }

  static badRequest(message: string): CustomError {
    return new CustomError(message, 400);
  }

  static notFound(message: string): CustomError {
    return new CustomError(message, 404);
  }

  static conflict(message: string): CustomError {
    return new CustomError(message, 409);
  }

  static unauthorized(message: string): CustomError {
    return new CustomError(message, 401);
  }

  static forbidden(message: string): CustomError {
    return new CustomError(message, 403);
  }

  static internal(message: string = 'Internal Server Error'): CustomError {
    return new CustomError(message, 500);
  }

  static serviceUnavailable(message: string): CustomError {
    return new CustomError(message, 503);
  }

  static gatewayTimeout(message: string): CustomError {
    return new CustomError(message, 504);
  }
}
