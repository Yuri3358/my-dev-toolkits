const toolkits = {
    template: pageTemplate,
    data() {
        return {
            toolkitList: Vue.ref([])
        }
    },
    mounted() {
        this.fetchToolkits()
    },
    methods: {
        fetchToolkits(filter="style") {
            let data = [] 
            colRef.where("type", "==", filter).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const search = doc.data()
                    data.push(search)
                })
                this.toolkitList.value = data
                console.log(this.toolkitList.value)
            })
        }
    }
}

exports = { toolkits }