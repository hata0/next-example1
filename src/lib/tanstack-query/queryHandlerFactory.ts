import { QueryFunction, queryOptions } from "@tanstack/react-query";

type Props<TQueryFnData> = {
  queryKey: string[];
  queryFn: QueryFunction<TQueryFnData, string[]>;
};

type HandlerProps<TQueryFnData, TData> = Omit<
  Parameters<typeof queryOptions<TQueryFnData, Error, TData, string[]>>[0],
  "queryFn" | "queryKey"
> & {
  queryKey?: string[];
};

export const queryHandlerFactory = <TQueryFnData = unknown>({
  queryKey: origin,
  queryFn,
}: Props<TQueryFnData>) => {
  return <TData = TQueryFnData>({
    queryKey: params,
    ...args
  }: HandlerProps<TQueryFnData, TData> = {}) => {
    return queryOptions({
      queryKey: params ? [...origin, ...params] : origin,
      queryFn: queryFn,
      ...args,
    });
  };
};
