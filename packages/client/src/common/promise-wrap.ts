export type PromiseWrapResponse<T> = [Error, undefined] | [undefined, T];

export type PromiseWrap<T> = PromiseLike<PromiseWrapResponse<T>>;

export const promiseWrap = <T>(promise: PromiseLike<T>): PromiseWrap<T> => (
  promise.then(
    (response: T): [undefined, T] => [undefined, response],
    (err: Error): [Error, undefined] => [err, undefined],
  )
);
