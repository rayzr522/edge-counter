export const config = { runtime: 'edge' }

export default (request: Request) {
  const url = new URL(request.url)
  return new Response(`hello, ${url.search.get('name') ?? 'world'}`)
}
