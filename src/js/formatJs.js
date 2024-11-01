// JavaScript (babel)
function formatJs() {
    const code = content.value
    // console.log(code)
    window.editor.prettier.format(code, {
        parser: "babel",
        plugins: window.editor.plugins,
    }).then(code => {
        // console.log(code)
        content.value = code
    })
}
formatJs()