export async function validateResponse(response: Response) {
  if (!response.ok) {
    throw new Error(await response.text());
  }
  return response
}