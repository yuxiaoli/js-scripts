async function fetchScript(script) {
    const url = `https://raw.githubusercontent.com/yuxiaoli/scripts/refs/heads/main/src/js/${script}.js`
    const text = await window.utils.api.get(url)
    content.value = text
}
fetchScript(kwargs.script)