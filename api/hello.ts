export const config = { runtime: 'edge' }

export default (request: Request) {
  const url = new URL(request.url)
  return new Response(`hello, ${url.searchParams.get('name') ?? 'world'}`)
}
