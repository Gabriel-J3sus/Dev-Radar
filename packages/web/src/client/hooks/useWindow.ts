export const useWindow = (key: string) => {
  if (typeof window !== undefined) {
    const url = new URL(window.location.href)

    const param = url.searchParams.get(key)

    return param
  }
}
