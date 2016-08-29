var DOMHandler = (function(newLanguage){

	var splitEnglish = english.split(" ")

	var words = {
		"Where":"Keshō-shitsu",
		"is":"wa",
		"the":"dokodesu",
		"bathroom?":"ka?"
	};

	var japTrans = "";

	newLanguage.translateToJapanese = function(){
		for (var i = 0; i < splitEnglish.length; i++) {
				if(splitEnglish[i] in words){
					japTrans += words[splitEnglish[i]] + " ";
				}
		}
		return japTrans;
	}

	return newLanguage;

})(DOMHandler || {});

