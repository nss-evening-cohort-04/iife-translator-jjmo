var selecetedLanguage;

var english = document.getElementById("english").innerHTML;

var languageChooser = document.getElementById("translate");

languageChooser.addEventListener("click",function(event){
	selecetedLanguage = document.getElementById("language").value;
	console.log(selecetedLanguage);
});

function output(outputLanguage){
	document.getElementById("output").value = outputLanguage;
}