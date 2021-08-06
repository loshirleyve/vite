// n1 oldVnode
// n2 newVnode
export function  diff(n1, n2) {
  // 1. tag
  if (n1.tag !== n2.tag) {
    n1.el.replaceWith(document.createElement(n2.tag))
  } else {
    // 小细节
    n2.el = n1.el
    // 2. props
    //  new: { id: 'foo', class: 'bar' }   new: { id: 'foo', class: 'bar', a }   new: { id: 'foo', class: 'bar', a }
    //  old: { id: 'foo', class: 'bar1' }  old: { id: 'foo', class: 'bar' }     old: { id: 'foo', class: 'bar', a, b }
    const { props: newProps } = n2
    const { props: oldProps } = n1
    if (newProps && oldProps) {
      Object.keys(newProps).forEach(key => {
        const newVal = newProps[key]
        const oldVal = oldProps[key]
        if (newVal !== oldVal) {
          n1.el.setAttribute(key, newVal)
        }
      })
    }

    if (oldProps) {
      Object.keys(oldProps).forEach(key => {
        if (!newProps[key]) {
          n1.el.removeAttribute(key)
        }
      })
    }
  }
  // 3. children -> (暴力解法)
  // 
}


// vdom -> dom
export function mountElement(vnode, container) {
  // tag
  const { tag, props, children } = vnode
  const el = (vnode.el = document.createElement(tag))

  // props
  if (props) {
    for(const key in props) {
      const val = props[key]
      el.setAttribute(key, val)
    }
  }
  // children
  // 1. 它可以接收一个 string
  if (typeof children === 'string') {
    const textNode = document.createTextNode(children)
    el.append(textNode)
  } else if (Array.isArray(children)) {
    // 2. 它可以接收一个数组
    children.forEach(v => {
      mountElement(v, el)
    })
  }

  // 插入
  container.append(el)
}