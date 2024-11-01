// JSON (no additional plugin needed)
function formatJson() {
    const code = content.value
    window.editor.prettier.format(code, {
        parser: "json",
        // plugins: window.editor.plugins,
        plugins: [],
    }).then(code => {
        // console.log(code)
        content.value = code
    })
}
formatJson()