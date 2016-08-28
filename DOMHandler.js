var english = document.getElementById("english").innerHTML;

var selectedLanguage;

var english = document.getElementById("english").innerHTML;

var languageChooser = document.getElementById("translate");

var english = document.getElementById("english").innerHTML;

languageChooser.addEventListener("click",function(event){
	selectedLanguage = document.getElementById("language").value;
        if(selectedLanguage === "Spanish") {
            output((DOMHandler.engToSpanish()));
        } else if (selectedLanguage === "Latin") {
            output((DOMHandler.engToLatin()));
        } else if (selectedLanguage === "Dutch") {
            output((DOMHandler.convertDutch()));
        } else {
            output((DOMHandler.japaneseTrans()));
        }
	console.log(selectedLanguage);
	console.log(english);
});

function output(outputLanguage){
	document.getElementById("output").value = outputLanguage;
}