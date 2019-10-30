// Business Logic
function latinizer(word) {
  var pigWord = word;
  var aeiou = /[aeiou]/i;
  var aeiouy = /[aeiouy]/i;

  var sliceLength = 0;
  if (word.includes("qu")) {
    var sliceLength = 1;
  }

  if (/[^a-z]/i.test(word)) {
    return pigWord;
  }
  else if ((word.length === 1) || (word.search(aeiou) === 0)) {
    pigWord += "way";
  }
  else {
    var firstVowelIndex = word.search(aeiouy);
    var pigWord = word.slice(firstVowelIndex + sliceLength) + word.slice(0, firstVowelIndex + sliceLength) + "ay";
  }
  return pigWord;
}

function toPigLatin(sentence) {
  var sentenceArray = sentence.split(" ");
  var pigSentenceArray = sentenceArray.map(function(word) {
    return latinizer(word);
  });
  var pigSentence = pigSentenceArray.join(" ");
  return pigSentence;
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
