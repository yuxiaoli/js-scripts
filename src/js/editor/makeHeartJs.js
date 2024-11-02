function makeHeartJs() {
    const code = content.value
    window.editor.minifyJs(code).then(result => {
        // console.log(result)
        // content.value = html
        content.value = window.editor.ascii.heart.make(result.code, "// ", "", "-")
    })
}
makeHeartJs()