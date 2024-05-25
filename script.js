$(document).ready(function() {
    // Select the element by its ID or class or any other selector
    var element = $('#currentYear');

    // Get the current year
    var currentYear = new Date().getFullYear();

    // Replace the inner text of the selected element with the current year
    element.text(currentYear);
});