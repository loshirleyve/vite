
import { effectWatch } from "./reactivity/index.js"
import { mountElement, diff } from "./render/index.js"
export function createApp(rootComponent) {
  return {
    mount (rootContainer) {
      const context = rootComponent.setup()
      let isMounted = false
      let prevSubTree
      effectWatch(() => {
        if (!isMounted) {
          // init
          isMounted = true
          rootContainer.innerHTML = ''
          const subTree = rootComponent.render(context)
          console.log(subTree);
          // 虚拟 dom 转 真实 dom
          mountElement(subTree, rootContainer)
          prevSubTree = subTree
        } else {
          // update
          // diff
          const subTree = rootComponent.render(context)
          diff(prevSubTree, subTree)
          prevSubTree = subTree
        }
        // newVnode oldVnode
        // rootContainer.append(element)
      })
    }
  }
}