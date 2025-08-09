export function useQuery() {
  const params = new URLSearchParams(window.location.search)
  return Object.fromEntries(params.entries())
}