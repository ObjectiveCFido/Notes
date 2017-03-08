//Determines the value of the note, the sticky note being created, and the text that will be changed.

var noteval = document.getElementById("note");
var snote = document.getElementById("snote");
var text = snote.getElementsByTagName("h2");

//Changes text to the value of the note form

text.innerHTML = noteval;

