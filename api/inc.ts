import { kv } from "@vercel/kv";

export const config = { runtime: "edge" };

export default async () => {
  const currentValue = await kv.incr("counter");
  return new Response(JSON.stringify({ value: currentValue }), {
    headers: { "content-type": "application/json" },
  });
};
