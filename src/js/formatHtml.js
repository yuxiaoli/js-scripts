// HTML (html)
function formatHtml() {
    const code = content.value
    window.editor.prettier.format(code, {
        parser: "html",
        plugins: window.editor.plugins,
    }).then(code => {
        // console.log(code)
        content.value = code
    })
}
formatHtml()