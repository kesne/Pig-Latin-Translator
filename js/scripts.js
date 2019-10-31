const aeiou = /[aeiou]/i;
const aeiouy = /[aeiouy]/i;

// Business Logic
function latinizer(word) {
    if (!word || /[^a-z]/i.test(word)) {
        console.log('early return');
        return word;
    }

    if (word.length === 1 || word.search(aeiou) === 0) {
        return word + 'way';
    }

    const sliceLength = word.includes('qu') ? 1 : 0;
    const firstVowelIndex = word.search(aeiouy);

    return (
        word.slice(firstVowelIndex + sliceLength) +
        word.slice(0, firstVowelIndex + sliceLength) +
        'ay'
    );
}

function toPigLatin(sentence) {
    return sentence
        .split(/([ ,!.?])/)
        .map(word => latinizer(word))
        .join('');
}

// User interface Logic
$(document).ready(function() {
    $('#entry').submit(function(event) {
        event.preventDefault();

        $('div#output').show();
        var userSentence = $('input#userSentence').val();
        var pigLatinSentence = toPigLatin(userSentence);
        $('p#sentence').text(pigLatinSentence);
    });
});
