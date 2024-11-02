function minifyJson() {
    const code = content.value
    content.value = JSON.stringify(code)
}
minifyJson()