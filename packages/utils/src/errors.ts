export const isNotFoundError = (error: any) => {
  return error?.response?.status === 404
}
