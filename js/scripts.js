// Business Logic
function toPigLatin(sentence) {
  var pigSentence = sentence;
  if (/[^a-z]/i.test(pigSentence)) {
    return pigSentence;
  }
  else if (sentence.length === 1) {
    pigSentence += "ay";
  }
  else if ((sentence.charAt(0).toLowerCase() === "a") || (sentence.charAt(0).toLowerCase() === "e") || (sentence.charAt(0).toLowerCase() === "i") || (sentence.charAt(0).toLowerCase() === "o") || (sentence.charAt(0).toLowerCase() === "u")) {
    pigSentence += "way";
  }
  else if (!sentence.includes("qu")) {
    var firstVowelIndex = vowelIndexer(sentence);
    console.log("Got it.");
    console.log("Index is", firstVowelIndex);
  }

  return pigSentence;
}

function vowelIndexer(string) {
  for (var i = 1; i < string.length; i++) {
    if ((string.charAt(i).toLowerCase() === "a") || (string.charAt(i).toLowerCase() === "e") || (string.charAt(i).toLowerCase() === "i") || (string.charAt(i).toLowerCase() === "o") || (string.charAt(i).toLowerCase() === "u")) {
      return i;
    }
  }
}







// User interface Logic
$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();

    $("div#output").show();
    var userSentence = $("input#userSentence").val();
    var pigLatinSentence = toPigLatin(userSentence);
    $("p#sentence").text(pigLatinSentence);
  });
});
