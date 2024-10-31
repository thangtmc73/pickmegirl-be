interface TypedRequestBody<T> extends Express.Request {
  body: T
}

interface TypedRequestQuery<T> extends Express.Request {
  query: T
}
