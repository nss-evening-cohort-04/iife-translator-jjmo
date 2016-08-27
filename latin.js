var DOMHandler = (function(latin) {
  var latinTranslated = {"Where": "Ubi", "is": "est", "the": " ", "bathroom?": "latrina?"};
  latin.getLatinTranslated = function() {
    return latinTranslated;
  },
  latin.engToLatin = function () {
    english = english.split(" ");

    var latinTrans = "";
    var latinTemp = latin.getLatinTranslated();

    for (var i = 0; i < english.length; i++) {
      if (english[i] in latinTemp) {
        if (latinTemp[english[i]] === " ") {

          } else {
          latinTrans += latinTemp[english[i]] + " ";
        }
      }
    }
    return latinTrans;
  }
  return latin;
})(DOMHandler || {});




