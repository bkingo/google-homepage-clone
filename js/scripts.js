var menuUl = document.querySelector('.menu');
var currentDropdownBtn = '';
var currentDropdownContent = '';

document.addEventListener('click', function(event) {
    // user clicks drop-down button while no drop-down content open
    if (event.target.classList.contains('js-dd-btn') && currentDropdownContent === '') {
        currentDropdownBtn = event.target;
        currentDropdownContent = event.target.nextElementSibling;
        currentDropdownContent.style.display = 'block';
  // drop-down content open and user clicks corresponding drop-down button
} else if (event.target === currentDropdownBtn && currentDropdownContent !== '') {
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
          // user clicks on whitespace while drop-down content open
        } else if (!isNotClickOutside && currentDropdownBtn !== '') {
            currentDropdownBtn = '';
            currentDropdownContent.style.display = 'none';
        }
    }
});

// // if user clicks on drop-down button, the drop-down popout
// menuUl.addEventListener('click', function(event) {
//     if (event.target.classList.contains('js-dd-btn') && currentDropdownContent === '') {
//         console.log('you clicked on a drop-down button');
//         currentDropdownContent = event.target.parentNode.getElementsByClassName('js-dd-content')[0];
//         console.log(currentDropdownContent);
//         currentDropdownContent.style.display = 'block';
//         console.log('you opened the drop-down content');
//     } else if (event.target.classList.contains('js-dd-btn') && event.target !== currentDropdownContent) {
//         console.log('you are trying to click on something else in the menu');
//         currentDropdownContent.style.display = 'none';
//         currentDropdownContent = event.target.parentNode.getElementsByClassName('js-dd-content')[0];
//         currentDropdownContent.style.display = 'block';
//     }
// });
//
// // if user clicks on white space and not another drop-down button, close any open drop-down popout
// document.addEventListener('click', function(event) {
//     var isClickOutside = currentDropdownContent.contains(event.target);
//     console.log(isClickOutside);
//     if (!isClickOutside && currentDropdownContent !== '' && event.target.classList.contains('js-dd-btn') !== true) {
//         currentDropdownContent.style.display = 'none';
//     }
// });


// set isddopen to false
// if user clicks on someting with js-dd-btn and open is false
// search the parent for something with js-dd-content
// set the display of that thing to block/inline-block
// set isddopen to true
// if user clicks on anything but the ddcontent, the display of the ddcontent changes to none
// is ddopen becomes false
