function takeANumber(currentLine, name) {
  currentLine.push(name);
  return (" Welcome," + name + " You " + " are " + " number " + currentLine.length + " in " + " line.");
}

function nowServing(currentLine) {
  let i = 0;
  while (i < currentLine.length) {
    i++;
  }
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return (" Currently " + " serving " + currentLine.shift() + ".");
  }
