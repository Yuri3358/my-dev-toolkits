const pageTemplate = `
    <header id="brand">
        <h1>Dev Toolkits</h1>
    </header>

    <div id="form-box" @keyup.enter="registerTool">
        <label for="tool">Ferramenta</label>
        <input id="tool" ref="toolInput" v-model="toolName">

        <label for="link">CDN</label> <br/>
        <textarea id="link" v-model="linkName"></textarea> <br/>
        <button class="btn btn-success" @click="registerTool">Salvar Ferramenta</button>
    </div>

    <div id="content-box">
        <table class="table table-secondary">
            <thead class="table-dark">
                <th>Ferramentas</th>
            </thead>
            <tbody>
                <tr v-for="tool in this.toolkitList.value">
                    <td class="tool-copyarea" @click="copyLink(tool.link)">{{ tool.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>

`

exports = { pageTemplate }