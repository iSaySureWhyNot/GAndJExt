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
    'mdn' : 'The forEach() method executes a provided function once for each array element.',
    'mdnCode':`const array1 = ['a', 'b', 'c'];\n

    array1.forEach(element => console.log(element));\n
    
    // expected output: "a"\n
    // expected output: "b"\n
    // expected output: "c"`,
    'w3':'The forEach() method calls a function once for each element in an array, in order. forEach() is not executed for array elements without values.',
    'stack':'https://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript'
  },

  'addEventListener' : {
    'mdn' : 'The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).',
    'mdnCode':`function eventHandler(event) {
      if (event.type == 'fullscreenchange') {
        /* handle a full screen toggle */
      } else /* fullscreenerror */ {
        /* handle a full screen toggle error */
      }
    }`,
    'w3':'The addEventListener() method attaches an event handler to the specified element.',
    'stack': 'https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick'
  },

  'fetch' : {
    'mdn' : 'The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.',
    'mdnCode':"fetch(url)\n.then(resp => resp.json())",
    'w3':'The Fetch API interface allows web browser to make HTTP requests to web servers. No need for XMLHttpRequest anymore.',
    'stack':'https://stackoverflow.com/questions/29775797/fetch-post-json-data'
  },

  'CQtest' : {
    'mdn' : 'A summary from Mozilla MDN documentation',
    'mdnCode': 'An example of the function being used',
    'w3': 'A snippet from a W3Schools article on the function',
    'stack': 'Link to a relevant post from Stack Overflow',
  }
}
//must wait for document to load!
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById("languages").addEventListener("change", function() {
    console.log();
  })
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


  //attempt to change font size with buttons
  // document.getElementById("decFont").addEventListener("click", function() {
  //   let keys = ['mdn', 'mdnCode', 'w3', 'stack'];

  //   keys.forEach(key => {
  //     let currentEle = document.getElementById(key);

  //     currentEle.style.fontSize--;
  //   });
  // });
});