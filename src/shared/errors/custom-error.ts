import { StatusCodes } from '@/config/status-codes';

export class CustomError extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode: number
  ) {
    super(message);
    this.name = 'CustomError';
  }

  static badRequest(message: string): CustomError {
    return new CustomError(message, StatusCodes.BadRequest);
  }

  static notFound(message: string): CustomError {
    return new CustomError(message, StatusCodes.NotFound);
  }

  static conflict(message: string): CustomError {
    return new CustomError(message, StatusCodes.Conflict);
  }

  static unauthorized(message: string): CustomError {
    return new CustomError(message, StatusCodes.Unauthorized);
  }

  static forbidden(message: string): CustomError {
    return new CustomError(message, StatusCodes.Forbidden);
  }

  static internal(message: string = 'Internal Server Error'): CustomError {
    return new CustomError(message, StatusCodes.InternalServerError);
  }

  static serviceUnavailable(message: string): CustomError {
    return new CustomError(message, StatusCodes.ServiceUnavailable);
  }

  static gatewayTimeout(message: string): CustomError {
    return new CustomError(message, StatusCodes.GatewayTimeout);
  }
}
