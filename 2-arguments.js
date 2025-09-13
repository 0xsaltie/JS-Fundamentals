let args = process.argv.slice(2);  // take everything from index 2 onward
let count = args.length;           // count how many arguments

if (count === 0) {
  console.log("No argument");
} else if (count === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

