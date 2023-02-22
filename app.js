const app = Vue.createApp({})

app
.component("Navbar", headerComponent)
.component("DataTools", dataTools)
.component("StyleTools", styleTools)
.component("Frameworks", frameworks)