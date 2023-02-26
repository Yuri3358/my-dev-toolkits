const pageTemplate = `
    <div id="styles-box">
        <ul v-for="style in this.toolkitList.value">
            <li @click="copyLink(style.name)">{{ style.name }}</li>  
        </ul>
    </div>
`

exports = { pageTemplate }