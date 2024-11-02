function notify(message) {
    window.editor.pushToast({ msg: message, duration: 5000 })
}
notify(kwargs.msg)