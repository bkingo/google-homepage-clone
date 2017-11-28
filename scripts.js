var searchField = document.querySelector('form');
var searchInput = searchField.querySelector('input');

searchField.addEventListener('submit', function(e) {
    e.preventDefault();
    location.href = 'https://www.google.com/search?q=' + searchInput.value;
});

// drop-down menu functionality for the menu
var menuUl = document.querySelector('.menu');
var currentDropdownBtn = '';
var currentDropdownContent = '';
document.addEventListener('click', function(event) {
    // user clicks drop-down button while no drop-down content open
    if (event.target.classList.contains('js-dd-btn') && currentDropdownContent === '') {
        currentDropdownBtn = event.target;
        currentDropdownContent = event.target.nextElementSibling;
        currentDropdownContent.style.display = 'block';
    }
    // drop-down content open and user clicks corresponding drop-down button
    else if (event.target === currentDropdownBtn && currentDropdownContent !== '') {
        currentDropdownContent.style.display = 'none';
        currentDropdownBtn = '';
        currentDropdownContent = '';
    } else {
        var isNotClickOutside = currentDropdownContent.contains(event.target);
        // drop-down content open and user clicks non-corresponding drop-down button
        if (!isNotClickOutside && currentDropdownContent !== '' && event.target.classList.contains('js-dd-btn')) {
            currentDropdownContent.style.display = 'none';
            currentDropdownBtn = event.target;
            currentDropdownContent = event.target.nextElementSibling;
            currentDropdownContent.style.display = 'block';
        }
        // user clicks on whitespace while drop-down content open
        else if (!isNotClickOutside && currentDropdownBtn !== '') {
            currentDropdownBtn = '';
            currentDropdownContent.style.display = 'none';
        }
    }
});
