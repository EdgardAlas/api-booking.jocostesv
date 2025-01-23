export type SignToken = (
  payload: string | Record<string, unknown> | Buffer<ArrayBufferLike>,
  duration?: string
) => Promise<string>;

