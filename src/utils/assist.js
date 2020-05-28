// 判断参数是否是其中之一
export function oneOf (value, validList) {
  return validList.some((item) => item === value)
}

// 获取字符串
export function getRandom (n = 16) {
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G']
  let res = ''
  for (let i = 0; i < n; i++) {
    const id = Math.ceil(Math.random() * 16)
    res += chars[id]
  }
  return res
}
