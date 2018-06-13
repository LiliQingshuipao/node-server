const renderFunction = ({html,js,less}) => {
    
    // let script = `<script>${js}</script>`
    var css = `<style>${less}</style>`
    // let body =  `${html}${script}`
    var html = `<!DOCTYPE html><html><head>${css}</head><body>${html}</body></html>`;
    return {
        name: html
    }
}

module.exports = {
    renderFunction,
}