async function fetchContent(url) {
    const text = await window.utils.api.get(url)
    content.value = text
}
fetchContent(kwargs.url)