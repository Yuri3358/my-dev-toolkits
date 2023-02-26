const toolkits = {
    template: pageTemplate,
    data() {
        return {
            toolkitList: Vue.ref([]),
            toolName: "",
            linkName: "",
        }
    },
    mounted() {
        this.fetchToolkits()
    },
    methods: {
        fetchToolkits() {
            let data = [] 
            colRef.get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const search = doc.data()
                    data.push(search)
                })
                this.toolkitList.value = data
                this.toolName = this.linkName = ""
                this.$refs.toolInput.focus()
            })
        },
        async registerTool() {
            await colRef.add({
                name: this.toolName,
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