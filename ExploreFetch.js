var fetch = require('node-fetch');

function getText() {
    // fetch('http://www.stripmallchurches.com')
    // .then(function(res){
    //   return res.text();
    // })
    // .then(function(data) {
    //   console.log(data);
    // });
  
    fetch('http://localhost:8888/tastyfaces/')
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        })
}
  
  getText();