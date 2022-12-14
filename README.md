# amplitude-export-parser

## Steps for exporting and parsing Amplitude json file

### Installing node dependencies

´´´
npm install
´´´

### Exporting file with Amplitude API

In the save.js file you will found a function that performs the exporting from Amplitude into a .zip file. Set the following constants:

- [PUT_KEY_HERE]
- [START_DATE]
- [END_DATE]

And finally run:

´´´
node save.js
´´´

### Unzip the file

This script doesn't cover the automatic unzipping of the file...for now you will have to do it manually.

### Parsing the json file

First, save the json files into a folder named "source" within the directory.

Run the script using:

´´´
node index.js
´´´

And there you have it! You will have a csv with the data parsed from the amplitude json.
