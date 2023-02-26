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
        <table class="table table-secondary">
            <thead class="table-dark">
                <th>Ferramenta</th>
            </thead>
            <tbody>
                <tr v-for="tool in this.toolkitList.value">
                    <td @click="copyLink(tool.name)">{{ tool.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>

`

exports = { pageTemplate }