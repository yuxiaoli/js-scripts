// CSS (postcss)
function formatCss() {
    const code = content.value
    window.editor.prettier.format(code, {
        parser: "css",
        plugins: window.editor.plugins,
    }).then(code => {
        // console.log(code)
        content.value = code
    })
}
formatCss()