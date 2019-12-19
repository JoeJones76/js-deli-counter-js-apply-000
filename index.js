var katzDeli = [];

function takeANumber (deliLine, newPerson) {
  deliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${deliLine.length} in line.`;
}

function nowServing (deliLine){
  if (deliLine.length === 0)
    return "There is nobody waiting to be served!";
  else
    return `Currently serving ${deliLine.shift()}.`;
}

function currentLine(deliLine){
  if (deliLine.length === 0)
    return "The line is currently empty.";
  else {
    var lineOut = "The line is currently: ";
    for (var i = 0; i <= deliLine.length-1; i++){
      lineOut += String(i+1) +". " +deliLine[i]+", ";
    }
    return lineOut.slice(0,lineOut.length-2);
  }
}

takeANumber(katzDeli, 'Ada');
takeANumber(katzDeli, 'Grace');
takeANumber(katzDeli, 'Kent');
takeANumber(katzDeli, 'Mike');
takeANumber(katzDeli, 'John');

console.log(katzDeli);

console.log(nowServing(katzDeli));

takeANumber(katzDeli, "Matz");

console.log(katzDeli);

console.log(currentLine(katzDeli));

console.log(nowServing(katzDeli));

console.log(currentLine(katzDeli));
