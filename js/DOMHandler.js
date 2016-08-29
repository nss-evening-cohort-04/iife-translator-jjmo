var english = document.getElementById("english").innerHTML;

var selectedLanguage;

var languageChooser = document.getElementById("translate");

languageChooser.addEventListener("click",function(event){
	selectedLanguage = document.getElementById("language").value;
        if(selectedLanguage === "Spanish") {
            output((DOMHandler.translateToSpanish()));
        } else if (selectedLanguage === "Latin") {
            output((DOMHandler.translateToLatin()));
        } else if (selectedLanguage === "Dutch") {
            output((DOMHandler.translateToDutch()));
        } else {
            output((DOMHandler.translateToJapanese()));
        }
});

function output(outputLanguage){
	document.getElementById("output").innerHTML = outputLanguage;
}
