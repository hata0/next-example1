export class HttpError extends Error {
  constructor(public readonly status?: number) {
    super();
  }
}
