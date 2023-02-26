const pageTemplate = `
    <div id="styles-box">
        <ul v-for="tool in this.toolkitList.value">
            <li @click="copyLink(tool.link)">{{ tool.name }}</li>  
        </ul>
    </div>
`

exports = { pageTemplate }