export const NEXT_PUBLIC_API_URL = () => {
  if (
    process.env.NEXT_PUBLIC_API_URL == undefined ||
    process.env.NEXT_PUBLIC_API_URL == ''
  ) {
    throw new Error('Environment variable `NEXT_PUBLIC_API_URL` required')
  }
  return process.env.NEXT_PUBLIC_API_URL
}
