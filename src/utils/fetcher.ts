export type Init<T> = Omit<RequestInit, "body" | "method"> & {
  body?: T;
};

export const fetcher = async <T extends object>(
  method:
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE"
    | "HEAD"
    | "OPTIONS"
    | undefined,
  path: RequestInfo | URL,
  { body, headers, ...restInit }: Init<T> = {},
) => {
  let res;
  let error;

  try {
    res = await fetch(path, {
      ...restInit,
      body: body && JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      method,
    });
  } catch (e) {
    error = e;
  }

  return { error, res };
};
