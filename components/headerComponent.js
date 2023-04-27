const headerComponent = {
    template: headerTemplate,
    data() {
        return {
            accountEmail: sessionStorage.getItem("userEmail") || "Registro/Login"
        }
    }
}

exports = { headerComponent }