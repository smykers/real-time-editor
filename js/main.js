refresh = () => {
    let textContext = document.getElementById('editor-textarea').value;
    document.getElementById('viewer').srcdoc = textContext;
}