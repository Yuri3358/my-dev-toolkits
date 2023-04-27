const app = Vue.createApp({})
const routes = [
    {path: "/", component: formComponent},
    {path: "/tools", component: toolkits},
]

const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})

app
.component("toolkits", toolkits)
.component("user-form", formComponent)
.component("app-header", headerComponent)
.use(router)
.mount("#root")