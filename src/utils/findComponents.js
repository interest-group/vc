/**
 * findParentComponents 向上查找父组件
 * @param context                   当前组件
 * @param name  {String|Array}      父组件name
 * @param cross {Boolean}           跨级父组件
 * @return {Array}                  父组件集合
 */
export function findParentComponents (context, name, cross = false) {
  const components = []
  const needs = [].concat(name)
  let parent = context.$parent
  while (parent) {
    if (needs.includes(parent.$options.name)) {
      components.push(parent)
      if (!cross) break
    }
    parent = parent.$parent
  }
  return components
}

/**
 * findChildComponents 向下查找子组件
 * @param context                   当前组件
 * @param name  {String|Array}      子组件name
 * @param cross {Boolean}           跨级子组件
 * @return {Array}                  子组件集合
 */
export function findChildComponents (context, name, cross = false) {
  const needs = [].concat(name)
  return context.$children.reduce((components, child) => {
    if (needs.includes(child.$options.name)) {
      components.push(child)
      if (!cross) return components
    }
    return components.concat(findChildComponents(child, name, cross))
  }, [])
}
