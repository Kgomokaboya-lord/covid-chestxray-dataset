var Papa = require("papaparse");
const fs = require('fs');
const file = fs.createReadStream('metadata.csv');

/**
 * TODO:
 * 	* read all the entries in the file
 * 	* group all the files
 * 
 */


Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {

		// print all the fields
		// console.log(results.data[0]);

		// print individual fields...
		// console.log(results.data[0]['finding']);
		// console.log(results.data[0]['filename']);

		// loop over all the fields - pick the ones you need
		results.data.forEach(function(row) {
			
			// console.log(row['finding']);
			// console.log(row['filename']);

		});





	  // papa.meta.fields
    //   printPapaObject(results);
    }
  });



// const rows = data.split('\n');
// console.log(rows[0]);
// console.log(rows[1]);

// console.log(`${rows[1][4]} - ${rows[1][17]}`)


// rows.forEach(function(line) {

// 	// const fields = line.split(',');
// 	// console.log(`${fields[4]} - ${fields[5]}`)

// })
