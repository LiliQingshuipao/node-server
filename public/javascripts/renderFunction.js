const renderFunction = ({html,js,less}) => {
    
    var script = `<script>${js}</script>`
    var css = `<style>${less}</style>`
    var body =  `${html}${script}`
    var html = `<!DOCTYPE html><html><head>${css}</head><body>${body}</body></html>`;
    return {
        name: html
    }
}

module.exports = {
    renderFunction,
}