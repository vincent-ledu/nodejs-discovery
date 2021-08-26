# kata nodejs discovery

## Steps

1. Nodejs installation
1. Create web server
1. Create and include a js module
    1. Function Add and export function
1. Unit test with Jest
    1. Install Jest with npm
    1. Write a simple jest test
    1. Configure package.json script test
    1. Make it watch code
1. Fizzbuzz kata
1. PM2
    1. Installation 
    1. Configure it as watch and in package.json


## Installation

1. Nodejs installation
    * Download and install nodejs at https://nodejs.org/en/download/
    * https://nodejs.org/dist/v14.17.5/node-v14.17.5-win-x64.zip should work everywhere on Windows
    * Configure nodejs in your environnement Path
1. Install if needed an IDE
    * VSCode : https://code.visualstudio.com/download

## Create a web server

At command prompt, in a project folder (such as d:\project\node\kata1), type :  
```shell
npm init
```

In index.js, type:  
```js
const http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
    res.end(output);
  })
  .listen(8080);
  ```

  Launch it by typing:  
  ```shell
  node index.js
  ```

Go to http://localhost:8080

## Create and include a js module

In ```addition.js```, write and export a function that add two numbers

Include ```addition.js``` in ```index.js``` and call the ```add``` function.

## Unit test with Jest
### Install Jest with npm
At command prompt, export proxy setting. On windows:  
```shell
set http_proxy=http://<proxyhost>:<proxyport>
set https_proxy=http://<proxyhost>:<proxyport>
```  

Then install Jest with:  
```shell
npm install --save-dev jest
```

Check your ```package.json``` changes.

### Write a simple jest test

Create a ```addition.test.js``` file, and write:  
```js
const { add } = require("./addition")

test('1+3 = 4', () => {
    expect(add(1,3)).toBe(4)
})
```
###  Configure package.json script test

In ```package.json```, replace 
```json
[...]
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
[...]
```

with:
```json
"scripts": {
    "test": "jest"
}
```

Launch:  
```shell
npm run test
```

### Make it watch code changes

In ```package.json```, make following changes:  
```json
"scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll"
}
```

Then, launch:  
```shell
npm run test:watch
```

Update your ```addition.test.js``` to add some others test, then save changes.

## Fizzbuzz kata

Following this exercices (https://codingdojo.org/kata/FizzBuzz/), write a js module that implement fizzbuzz function, taking a parameter and return fizz, buzz, fizzbuzz or an integer, by "baby step".
In //, write unit tests to test each case.

## PM2

### Installation 

At command prompt, type:  
```shell
npm install -g pm2
```

-g is for global, make the program callable directly on prompt.

You can now launh your web app with:  
```shell
pm2 start index.js
```

### Configure it as watch and in package.json

In ```package.json```, add a start script, as following:  
```json
"scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll",
    "start": "pm2 start index.js"
  },
```

Then, you can launch the webapp with:  
```shell
npm run start
```

Now, add ```--watch``` at the ```start``` script line.
```json
"scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll",
    "start": "pm2 start index.js"
  },
```

Restart pm2:  
```shell
pm2 delete 0
npm run start
```  


Update your ```index.js```, save changes, and see it in your browser without relaunch nodejs server.

Some PM2 commands:  
```shell
pm2 ls 
pm2 start <entrypoint>
pm2 stop <id|name>
pm2 restart <id|name>
pm2 logs <id|name>
pm2 describe <id|name>
pm2 delete <id|name>
```