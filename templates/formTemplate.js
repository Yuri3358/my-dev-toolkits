const formTemplate = /*html*/`
    <div id="login-container">
        <form method="post" onsubmit="return false;">
            <label class="form-labels" for="email-input">Email</label>
            <input class="form-inputs" type="email" v-model="userEmail" required>

            <label class="form-labels" for="password-input">Senha</label>
            <input class="form-inputs" type="password" id="password-input" v-model="userPassword" autocomplete="password" required>
            
            <input class="btn btn-warning submits" type="submit" @click="registerUser" value="Registrar-se">
            <input class="btn btn-success submits" type="submit" @click="loginUser" value="Entrar">
        </form>
    </div>
`

exports = { formTemplate }