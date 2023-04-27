const pageTemplate = /*html*/`
    <div id="form-box" @keyup.enter="registerTool">
        <label class="tools-labels" for="tool">Ferramenta</label>
        <br/>
        <input id="tool" ref="toolInput" v-model="toolName">
        <br/>
        <label class="tools-labels"for="link">CDN</label>
        <br/>
        <textarea id="link" v-model="linkName"></textarea>
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