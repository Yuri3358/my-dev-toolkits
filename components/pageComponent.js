const toolkits = {
    template: pageTemplate,
    data() {
        return {
            toolkitList: Vue.ref([]),
            toolName: "",
            linkName: "",
            userEmail: sessionStorage.getItem("userEmail"),
            userId: sessionStorage.getItem("userId")
        }
    },
    mounted() {
        this.fetchToolkits()
    },
    methods: {
        async fetchToolkits() {
            let data = [] 
            const snapshot = await colRef.doc(this.userId).collection("toolskit").get()
            snapshot.forEach(doc => {
                const search = doc.data()
                if (Object.values(search).length > 1) {
                    data.push(search)
                    data.sort((a, b) => a.name.localeCompare(b.name))
                }
            })
            this.toolkitList.value = data
            this.toolName = this.linkName = ""
            this.$refs.toolInput.focus()
        },
        async registerTool() {
            await colRef.doc(this.userId).collection("toolskit").add({
                name: this.toolName.charAt(0).toUpperCase() + this.toolName.slice(1),
                link: this.linkName
            })
            this.fetchToolkits()
        },
        copyLink(tool) {
            navigator.clipboard.writeText(tool)
        }
    }
}

exports = { toolkits }