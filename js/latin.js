var DOMHandler = (function(latin) {
  var latinTranslated = {"Where": "Ubi", "is": "est", "the": " ", "bathroom?": "latrina?"};
  latin.getLatinTranslated = function() {
    return latinTranslated;
  },
  latin.translateToLatin = function () {
    englishTranslation = english.split(" ");

    var latinTrans = "";
    var latinTemp = latin.getLatinTranslated();

    for (var i = 0; i < english.length; i++) {
      if (englishTranslation[i] in latinTemp) {
        if (latinTemp[englishTranslation[i]] === " ") {

          } else {
            latinTrans += latinTemp[englishTranslation[i]] + " ";
        }
      }
    }
    return latinTrans;
  }
  return latin;
})(DOMHandler || {});




