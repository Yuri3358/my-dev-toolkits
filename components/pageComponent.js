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
            })
        },
        async registerTool() {
            await colRef.add({
                name: this.toolName,
                link: this.linkName
            })
        },
        copyLink(tool) {
            navigator.clipboard.writeText(tool)
        }
    }
}

exports = { toolkits }