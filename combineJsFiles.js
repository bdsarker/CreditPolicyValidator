const fs = require("fs");
const path = require("path");

// Function to recursively find all JavaScript files in a directory
const getAllJsFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // If the file is a directory, recurse into it
      getAllJsFiles(filePath, fileList);
    } else if (file.endsWith(".js")) {
      // If the file is a JavaScript file, add it to the list
      fileList.push(filePath);
    }
  });

  return fileList;
};

// Function to read all JS files and write their content to allcode.txt
const combineJsFiles = (sourceDir, outputFile) => {
  const jsFiles = getAllJsFiles(sourceDir);
  const writeStream = fs.createWriteStream(outputFile);

  console.log(`Found ${jsFiles.length} JavaScript files.`);
  jsFiles.forEach((file) => {
    console.log(`Reading: ${file}`);
    const fileContent = fs.readFileSync(file, "utf-8");

    writeStream.write(`/* File: ${file} */\n`);
    writeStream.write(fileContent + "\n\n");
  });

  writeStream.end();
  console.log(`Combined code written to: ${outputFile}`);
};

// Specify the directory to search and the output file
const sourceDirectory = "."; // Replace with your source directory
const outputFileName = "allcode.txt";

// Execute the function
combineJsFiles(sourceDirectory, outputFileName);
