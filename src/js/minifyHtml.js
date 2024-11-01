function minifyHtml() {
    const code = content.value
    window.editor.minifyHtml(code, {
        // removeAttributeQuotes: true,
        collapseWhitespace: true,
    }).then(html => {
        // console.log(result)
        content.value = html
    })
}
minifyHtml()