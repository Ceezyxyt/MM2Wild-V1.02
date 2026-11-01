export async function readApiJson(response, fallback = {}) {
  const text = await response.text();
  if (!text) return fallback;

  try {
    return JSON.parse(text);
  } catch {
    return fallback;
  }
}

export async function readApiError(response, fallback = "The server returned an invalid response.") {
  const payload = await readApiJson(response, null);
  return payload?.error || fallback;
}
