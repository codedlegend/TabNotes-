//insert the text area

const textArea = document.createElement("textarea");

textArea.style.position = "fixed";
textArea.style.zIndex = "100000",
textArea.style.width = "300px";
textArea.style.height = "150px";
textArea.style.boxShadow = "1px, 1px, 5px, black";
textArea.style.backgroundColor = document.body.style.backgroundColor;
textArea.style.color = document.body.style.color;
textArea.style.padding = "30px";
textArea.style.borderRadius = "50px";

document.body.prepend(textArea);


const url = window.location.href;//gets the window url or tab url

textArea.addEventListener('input', () => {
    const text = textArea.value;
    chrome.storage.local.set({[url] : text} )//set the url as the key to the value
});

chrome.storage.local.get([url], (result) => {//gets the value using the key(url)
    if(result[url]){
        textArea.value = result[url];
    }
})