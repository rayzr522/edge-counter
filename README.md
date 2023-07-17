# edge-counter

> a super minimal repo showing how to write raw edge functions with Vercel

## takeaways

- you MUST include `export const config = { runtime: 'edge' }` in your routes. unlike Next.JS, you can't use `export const runtime = 'edge'`. omitting this will result in an API route that just times out.
- you MUST have a non-empty `public` directory. if you don't actually need anything public, just throw an empty file in there to make Vercel happy. for this project I threw some bare-bones HTML in there.
- for some reason, Vercel builds report TypeScript errors that simply aren't real. idk why, but the deployment itself works fine.
- if you want to develop locally (i.e. `vercel dev`), you WILL need to set up a tsconfig. however this isn't technically needed to deploy.
- execution time doesn't actually seem to be amazing.

## setup

```bash
# clone the repo
git clone git@github.com:rayzr522/edge-counter.git
cd edge-counter

# install deps
pnpm install

# run vercel's dev server locally
pnpm vercel dev
```
