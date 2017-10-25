//
// var notifyDropdownButton = document.querySelector('.js-notifications');
// var notifyDropdownContent = document.querySelector('.g-notifications');
//
//
// notifyDropdownButton.onclick = function() {
//     if (notifyDropdownContent.style.display === 'block') {
//         notifyDropdownContent.style.display = 'none';
//         console.log('time to hide')
//     } else {
//         notifyDropdownContent.style.display = 'block';
//         console.log('time to show')
//     }
// }
//
// var gappsDropdownButton = document.querySelector('.js-gapps-dd-btn');
// var gappsDropdownContent = document.querySelector('.js-gapps-dd-content');
//
//
// gappsDropdownButton.onclick = function() {
//     if (gappsDropdownContent.style.display === 'inline-block') {
//         gappsDropdownContent.style.display = 'none';
//         console.log('time to hide')
//     } else {
//         gappsDropdownContent.style.display = 'inline-block';
//         console.log('time to show')
//     }
// }
set isddopen to false
if user clicks on someting with js-dd-btn and open is false
search the parent for something with js-dd-content
set the display of that thing to block/inline-block
set isddopen to true
if user clicks on anything but the ddcontent, the display of the ddcontent changes to none
is ddopen becomes false
