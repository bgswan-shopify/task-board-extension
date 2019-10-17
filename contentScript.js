document.onclick = function(evt) {
  elements = document.getElementsByClassName('issue-card');
  Array.from(elements).forEach(function(element) {
    if (element.contains(evt.target)) {
      var titleAttributes = JSON.parse(element.getAttribute('data-card-title'));
      var issueNumber = titleAttributes.reverse()[1];
      var searchField = document.getElementsByName('card_filter_query')[0];
      var event = new Event('input', {'bubbles': true, 'cancelable': true});
      searchField.value = issueNumber;
      searchField.dispatchEvent(event);
    }
  });
};