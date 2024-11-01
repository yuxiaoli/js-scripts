function makeHeartHtml() {
    const code = content.value
    window.editor.minifyHtml(code, {
        // removeAttributeQuotes: true,
        collapseWhitespace: true,
    }).then(html => {
        // console.log(result)
        // content.value = html
        content.value = window.editor.ascii.heart.make(html, "<!-- ", " -->", "-")
    })
}
makeHeartHtml()