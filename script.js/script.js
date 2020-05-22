function makeRow(hour, currHour){
    let newDiv = document.createElement("div");
    newDiv.className = "row";

    let timeDiv = makeTimeDiv(hour);
    newDiv.appendChild(timeDiv);

    let textArea = makeTextArea(hour,currHour);
    newDiv.appendChild(textArea);

    let saveButton = makeSaveButton(hour);
    newDiv.appendChild(saveButton);

    return newDiv;
}