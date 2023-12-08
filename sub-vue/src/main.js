// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
    renderWithQiankun,
    qiankunWindow,
    QiankunProps,
  } from 'vite-plugin-qiankun/dist/helper'

let app

function render() {
  app = createApp(App)
  app.use(router)
  app.mount('#app2')
}

// 卸载子应用的方法
export async function unmount() {
  app.unmount('#app2')
  app = null
}

// renderWithQiankun： 为子应用导出一些生命周期函数 供主应用在特殊的时机调用
// qiankunWindow： qiankunWindow.POWERED_BY_QIANKUN 可判断是否在qiankun环境下
const initQianKun = () => {
  renderWithQiankun({
    // bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap
    // 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等
    bootstrap() {
      console.log('bootstrap')
    },
    // 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法，也可以接受主应用传来的参数
    mount(_props) {
      console.log('mount', _props)
      render(_props.container)
    },
    // 应用每次 切出/卸载 会调用的unmount方法，通常在这里我们会卸载微应用的应用实例
   async unmount(_props) {
       await unmount()
      console.log('unmount', _props)
    },
    update: function (props) {
      console.log('update')
    },
  })
}

// const render = (container) => {
//   // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
//   const appDom = container ? container : '#app2'
//   app.mount(appDom)
// }
// 判断是否为乾坤环境，否则会报错[qiankun]: Target container with #subAppContainerVue3 not existed while subAppVue3 mounting!
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render(null)
