var DOMHandler = (function(newTranslate) {

var Words = english.split(" ");

var dutchLanguage = { 
      "Where":"Waar",
      "is":"is",
      "the":"de",
      "bathroom?":"badkamer?"
};
  
var dutchTrans = "";
  
newTranslate.convertDutch = function() {
    for (var i = 0; i < Words.length; i++) {
      if(Words[i] in dutchLanguage) {
        dutchTrans += dutchLanguage[Words[i]] + " ";
      }
    }
    return dutchTrans;
};
  return newTranslate;
})(DOMHandler || {});