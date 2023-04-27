const formComponent = {
    template: formTemplate,
    data() {
        return {
            userEmail: "",
            userPassword: ""
        }
    },
    methods: {
        clearInputs() {
            this.userEmail = this.userPassword = ""
        },
        async registerUser() {
            const userCredentials = await autho.createUserWithEmailAndPassword(this.userEmail, this.userPassword)
            colRef.doc(userCredentials.user.uid).set({
                email: this.userEmail
            })
            await colRef.doc(userCredentials.user.uid).collection("toolskit").add({})
        },
        async loginUser() {
            const userCredentials = await autho.signInWithEmailAndPassword(this.userEmail, this.userPassword)
            sessionStorage.setItem("userId", userCredentials.user.uid)
            sessionStorage.setItem("userEmail", userCredentials.user.email)
            console.log(sessionStorage.getItem("userId"))
        }
    }
}

exports = { formComponent }