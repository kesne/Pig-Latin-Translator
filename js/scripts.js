// Business Logic
function toPigLatin(sentence) {
  var pigSentence = sentence;
  if (/[^a-z]/i.test(pigSentence)) {
    return pigSentence;
  }
  else if (sentence.length === 1) {
    pigSentence += "ay";
  }


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
