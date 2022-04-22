const fs = require('fs');

const writeFile = readmeInput => {
    return new Promise ((resolve, reject) => {

        fs.writeFile('./dist/README.md', readmeInput, err => {
              if (err) {
                  reject(err);
                  return;
              }
          
              resolve({
                  ok:true,
                  message: 'README.md Created'
              });

        });
    });


}

module.exports = writeFile;