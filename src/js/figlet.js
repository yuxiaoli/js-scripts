function figlet() {
    // console.log(content.value)
    window.editor.figlet.text(content.value, {font: "Graffiti"}, function (err, text) {
        if (err) {
            console.log("something went wrong...");
            console.dir(err);
            return;
        }
        // console.log(text);
        content.value = text
    })
}
figlet()