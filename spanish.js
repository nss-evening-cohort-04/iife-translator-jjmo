// This SandwichMaker IIFE augments the original one
var DOMHandler = (function(spanish) {

  // Private variable to store the different meat prices
  var spanishTranslated = {"Where": "dónde", "is": "está", "the": "el", "bathroom?": "baño"};

  // Augment the original object with another method
  spanish.getSpanishTranslated = function() {
    return spanishTranslated;
  },
  spanish.engToSpanish = function() {
    english = english.split(" ");

    var spanishTrans = "";
    var spanTemp = spanish.getSpanishTranslated();

    for(var i = 0; i < english.length; i++) {
      if(english[i] in spanTemp) {
        spanishTrans += spanTemp[english[i]] + " ";
      }
    }
    return spanishTrans;
  }

  // Return the new, augmented object with the new method on it
  return spanish;
})(DOMHandler || {});
