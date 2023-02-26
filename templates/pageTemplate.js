const pageTemplate = `
    <header id="brand">
        <h1>Dev Toolkits</h1>
    </header>

    <div id="form-box" @keyup.enter="registerTool">
        <label for="tool">Ferramenta</label>
        <input id="tool" v-model="toolName">
        <label for="link">CDN</label>
        <input id="link" v-model="linkName">
        <button class="btn btn-success" @click="registerTool">Salvar</button>
    </div>

    <div id="content-box">
        <ul v-for="tool in this.toolkitList.value">
            <p class="tools" @click="copyLink(tool.link)">{{ tool.name }}</p>  
        </ul>
    </div>

`

exports = { pageTemplate }