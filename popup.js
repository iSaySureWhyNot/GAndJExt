// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };

const database = {
  'bind' : {
    'mdn' : 'The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.',
    'mdnCode':`const module = {\n
      x: 42,\n
      getX: function() {\n
        return this.x;\n
      }\n
    };\n
    
    const unboundGetX = module.getX;\n
    console.log(unboundGetX()); // The function gets invoked at the global scope\n
    // expected output: undefined\n
    
    const boundGetX = unboundGetX.bind(module);\n
    console.log(boundGetX());\n
    // expected output: 42`,
    'w3':'The bind() method attaches one or more event handlers for selected elements, and specifies a function to run when the event occurs.',
    'stack':'https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method'
  },

  'forEach' : {
    'mdn' : 'blah',
    'mdnCode':'blah',
    'w3':'blah',
    'stack':'blah'
  },

  'addEventListener' : {
    'mdn' : 'blah',
    'mdnCode':'blah',
    'w3':'blah',
    'stack':'blah'
  },

  'fetch' : {
    'mdn' : 'blah',
    'mdnCode':'blah',
    'w3':'blah',
    'stack':'blah'
  },
}
//must wait for document to load!
document.addEventListener('DOMContentLoaded', () => {

  //event listener for when the button is clicked!
  document.getElementById("querySearch").addEventListener("click", function() {
    console.log("entered");
    let query = document.getElementById("queryBox").value;
    query = query.trim();
    
    let keys = ['mdn', 'mdnCode', 'w3', 'stack'];

    keys.forEach(key => {
      let currentEle = document.getElementById(key);
      
      if (!database[query]) {
        currentEle.innerHTML = "Error: query not found!";
      } else {
        if (key === 'stack') {
          currentEle.innerHTML = "Relevant StackOverflow Post";
          currentEle.href = database[query][key];
          currentEle.target = "_blank";
          currentEle.rel = "noopener noreferrer";
          console.log("goes in here!");
        } else {
          currentEle.innerHTML = database[query][key]
        };
      }
    });

    // query = query.replaceAll(/ /g, "+");

    // let sites = ["+mdn", "+stack+overflow", "+w3schools"]
    
    // sites.forEach(site => {
    //   window.open(`https://letmegooglethat.com/?q=${query + site}&l=1`)
    // });
    console.log("exited");
  });

});

//fetch
//bind
//object?
//array?
//forEach
//addEventListener