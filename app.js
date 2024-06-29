const express = require('express');
const app = express();
const port = 3000;


// const { log } = require("console");
// // const express = require("express")
// // const app = express();
// const https = require("https")
// const bodyParser=require("body-parser")

// app.use(express.static("public"));
// // let urll="";
// app.use(bodyParser.urlencoded({extended:true}))

// Route for the home page
app.get('/', (req, res) => {
    // html="html"
    // document.write(html)
  res.send('Welcome to the Home Page!');
    
});

// Middleware to log requests
app.use((req, res, next) => {
  // console.log(`${req.method} request for '${req.url}'`);
  // insted of 1 we can add any a athentication check for enable right use of this fuction
  if(1){
    next();

  }
  else{
    res.send("not a valid");
  }
});


app.get('/about', (req, res) => {
  res.send('Welcome to the About Page!');
  
});

// app.post('/',(req,res)=>
// {
//   res.write(` <html>
//     <head>       
//     </head>
//     <body>
//     <h1>hello</h1>
//     </body>
//     </html>`)

//     res.send()
//     // instaed of res.send() we can write res.end()
  
// })

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
