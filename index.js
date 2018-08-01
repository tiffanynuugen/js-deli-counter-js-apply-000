function takeANumber(currentLine, name) {
  currentLine.push(name);
  return(" Welcome," + name + " You " + " are " + " number " + currentLine.length + " in " + " line.");
}

function nowServing(currentLine) {
  for (i = 0; i < currentLine.length; i++) {
    return "There is nobody waiting to be served!";
  }
}
