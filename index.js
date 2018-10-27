const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//checks if 2nd argument is 'init'
process.argv[2] === 'init'

//questions have to be nested to be asked in sync
  rl.question('App name?', (name)=>{
    rl.question('Description?', (desc)=>{
      rl.question('Version?', (version)=>{
        rl.question('Author?', (author)=>{
          rl.question('Main file path?', (main)=>{
            const response = {
              'name': name,
              'description': desc,
              'version': version,
              'author': author,
              'main': main
            }

            const obj = JSON.stringify(response, '', '\t')
            fs.writeFile('package.json', obj, (err)=>{
              if(err) throw err;
              console.log('A new package.json file has been saved');
            });
            rl.close()
          })
        })
      })
    })
  })


  