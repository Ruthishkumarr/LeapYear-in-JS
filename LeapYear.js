var userinput = prompt("Enter a Year");
if (userinput % 4 === 0 && userinput % 100 !== 0) {
  console.log("LeapYear");
} else if (
  userinput % 100 === 0 &&
  userinput % 4 === 0 &&
  userinput % 400 === 0
) {
  console.log("LeapYear");
} else {
  console.log("Not a LeapYear");
}
