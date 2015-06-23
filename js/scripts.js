var wordCount = function(phrase) {
  var wordCounts = {};

  phrase.split(" ").forEach(function(word) {
    // If no key
    if(!wordCounts[word]) {
      wordCounts[word] = 1;
    }
    // If key
    else {
      wordCounts[word]++;
    }
  });

  return sortHash(wordCounts);
};

// Returns a multi-dimensional array: [["word", 2], ["another word", 1]]
var sortHash = function(hash) {
  var sortable = [];

  // Convert hash to array
  for (var key in hash) {
    sortable.push([key, hash[key]]);
  }

  // Sort words by word count
  sortable.sort(function(a, b) {
    return a[1] < b[1];
  });

  return sortable;
};

var populateWordCounts = function(wordCounts) {

  // For each sorted word and count, show it on screen as list item
  for (var key in wordCounts) {
    $("#result").append("<li>" + wordCounts[key][0] + ": " + wordCounts[key][1] + "</li");
  }
}

$(function() {
  $("form").submit(function() {
    $("#result-wrapper").show();
    $("#result").empty();
    populateWordCounts(wordCount($("input").val()));
    return false;
  });
});
