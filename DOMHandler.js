var english = document.getElementById("english").innerHTML;

var selectedLanguage;

var languageChooser = document.getElementById("translate");


languageChooser.addEventListener("click",function(event){
	selecetedLanguage = document.getElementById("language").value;
        if(selecetedLanguage === "Spanish") {
            output((DOMHandler.engToSpanish()));
        } else if (selecetedLanguage === "Latin") {
            output((DOMHandler.engToLatin()));
        } else if (selecetedLanguage === "Dutch") {
            output((DOMHandler.convertDutch()));
        } else {
            output((DOMHandler.japaneseTran()));
        }
	console.log(selecetedLanguage);
});

function output(outputLanguage){
	document.getElementById("output").value = outputLanguage;
}