const arg = process.argv[2];

if (!arg || isNaN(Number(arg))) {
  console.log("Not a number");
} else {
  console.log("My number: " + parseInt(arg));
}
