// 判断参数是否是其中之一
export function oneOf (value, validList) {
  return validList.some((item) => item === value)
}

// todo 废弃，使用 mixins - emitter 替代
// 向上查找父组件
export function findParentComponent (context, name) {
  const needs = [].concat(name)
  let parent = context.$parent
  while (parent) {
    if (needs.includes(parent.$options.name)) {
      break
    }
    parent = parent.$parent
  }
  return parent
}
// todo 废弃，使用 mixins - emitter 替代
// 向下查找子组件
export function findChildComponents (context, name) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === name) components.push(child)
    return components.concat(findChildComponents(child, name))
  }, [])
}
// todo 废弃，使用 mixins - emitter 替代
// 事件冒泡 子组件向父组件发送事件
export function bubbling (context, parentName, eventName, ...params) {
  const parent = findParentComponent(context, parentName)
  parent && parent.$emit(eventName, ...params)
}
// todo 废弃，使用 mixins - emitter 替代
// 事件广播 父组件向子组件发送事件
export function broadcast (context, childName, eventName, ...params) {
  findChildComponents(context, childName).forEach(child => {
    child.$emit(eventName, ...params)
  })
}

/**
 * 组件类名
 * **/
const prefix = 'vc'
export function prefixCls (type) {
  return type ? `${prefix}-${type}` : prefix
}
