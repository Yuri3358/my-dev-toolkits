const pageTemplate = `
    <header id="brand">
        <h1>Dev Toolkits</h1>
    </header>

    <div id="form-box">
        <label for="tool">Ferramenta</label>
        <input id="tool">
        <label for="link">CDN</label>
        <input id="link">
        <button class="btn btn-success">Salvar</button>
    </div>
    
    <div id="content-box">
        <ul v-for="tool in this.toolkitList.value">
            <li @click="copyLink(tool.link)">{{ tool.name }}</li>  
        </ul>
    </div>

`

exports = { pageTemplate }