// Interfaces
import type { RequestHandler } from '$routes/api/hello/$types';

export const GET: RequestHandler = async () => {
  return new Response(
    JSON.stringify({ message: 'world' }),
    { status: 200 }
  );
};
