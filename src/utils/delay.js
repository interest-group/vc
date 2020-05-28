export function delay (time) {
  return new Promise((resolve) => setTimeout(() => resolve(), time))
}

export async function loop (time, cb = () => true) {
  if (cb()) return true
  await delay(time)
  await loop(time, cb)
  return true
}
