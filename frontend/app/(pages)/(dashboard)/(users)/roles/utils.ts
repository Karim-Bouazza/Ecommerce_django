export function getApiErrorMessage(error: unknown, fallback: string): string {
  const data = (error as any)?.response?.data;
  if (!data) return fallback;
  if (typeof data === "string") return data;
  if (data.detail) return data.detail;

  const firstField = Object.values(data)?.[0];
  if (Array.isArray(firstField) && firstField.length > 0) return firstField[0];

  return fallback;
}
