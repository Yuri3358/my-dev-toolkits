const app = Vue.createApp({})

const routes = [
    {path: "/", component: frameworks},
    {path: "/frameworks", component: frameworks},
    {path: "/styles", component: styleTools},
    {path: "/data", component: dataTools},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

app
.component("Navbar", headerComponent)
.component("DataTools", dataTools)
.component("StyleTools", styleTools)
.component("Frameworks", frameworks)
.use(router)
.mount("#root")