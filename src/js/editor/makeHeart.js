function makeHeart(commentPrefix, commentSuffix, fillCharacter) {
    content.value = window.editor.ascii.heart.make(content.value, commentPrefix, commentSuffix, fillCharacter)
}
makeHeart(kwargs.prefix, kwargs.suffix, kwargs.fill)