let active = false
document.getElementById("addNote").addEventListener("click", (event) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        active = true 
        if (active === true) {chrome.scripting.executeScript({
            target : {tabId : tabs[0].id},
            files : ["scripts/content.js"]
        })}
    })});