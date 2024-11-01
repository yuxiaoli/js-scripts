function mdToHtml() {
    // console.log(content.value)
    content.value = window.editor.md.render(content.value)
}
mdToHtml()