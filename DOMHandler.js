var english = document.getElementById("english").innerHTML;

var selectedLanguage;

var languageChooser = document.getElementById("translate");


languageChooser.addEventListener("click",function(event){
	selectedLanguage = document.getElementById("language").value;
        if(selectedLanguage === "Spanish") {
            output((DOMHandler.engToSpanish()));
        } else if (selectedLanguage === "Latin") {
            output((DOMHandler.engToLatin()));
        } else if (selectedLanguage === "Dutch") {
            output((DOMHandler.convertDutch()));
        } else {
            output((DOMHandler.japaneseTran()));
        }
	console.log(selectedLanguage);
	console.log(english);
});

function output(outputLanguage){
	document.getElementById("output").value = outputLanguage;
}