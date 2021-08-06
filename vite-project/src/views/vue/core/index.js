import { effectWatch } from './reactivity/index.js'
import { mountElement, diff } from './render/index.js'

export function createApp(rootComponent) {
  return {
    mount (rootContainer) {
      const context = rootComponent.setup()
      let isMounted = false
      let prevSubTree


      effectWatch(() => {
        rootContainer.innerHTML = ''

        if (!isMounted) {
          // init
          isMounted = true
          const subTree = rootComponent.render(context)
          console.log(subTree)
          mountElement(subTree, rootContainer)
          prevSubTree = subTree
        } else {
          // update
          const subTree = rootComponent.render(context)
          diff(prevSubTree, subTree)
          prevSubTree = subTree
        }
        
        // diff
        // newVnode oldVnode
        // rootContainer.append(element)
      })

    }
  }
}