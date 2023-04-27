const headerTemplate = /*html*/`
    <header id="header-container">
        <h1 id="brand">Dev Toolkits</h1>
        <p id="current-account">
            <a href="#/tools">
                {{ accountEmail }}
            </a>
        </p>
    </header>
`

exports = { headerTemplate }