// 判断参数是否是其中之一
export function oneOf (value, validList) {
  return validList.some((item) => item === value)
}
