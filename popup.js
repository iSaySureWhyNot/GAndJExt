let changeColor = document.getElementById('changeColor');
let calButton = document.getElementById('calButton');
let mainframe = document.getElementById('mainframe')

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
console.log(mainframe.style)
calButton.onclick = function() {
    if (mainframe.style.display === "none") {
        mainframe.style.display = "flex";
      } else {
        mainframe.style.display = "none";
      }
}