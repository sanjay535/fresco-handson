const csv = require('csv-parser');
const fs = require('fs');

var countObj={}
var results=[]

module.exports=function(req,res){
    /*write your code here*/
    fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      // [
      //   { NAME: 'Daffy Duck', AGE: '24' },
      //   { NAME: 'Bugs Bunny', AGE: '22' }
      // ]
    });
}