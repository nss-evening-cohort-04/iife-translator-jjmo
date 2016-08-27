var english = document.getElementById("english").innerHTML;

var selecetedLanguage;

var languageChooser = document.getElementById("translate");

languageChooser.addEventListener("click",function(event){
	selecetedLanguage = document.getElementById("language").value;
	console.log(selecetedLanguage);
	console.log(english);
});

function output(outputLanguage){
	document.getElementById("output").value = outputLanguage;
}