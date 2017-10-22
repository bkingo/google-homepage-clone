
var notifyButton = document.querySelector('.js-notifications');
var notifyPopout = document.querySelector('.g-notifications');


notifyButton.onclick = function() {
    if (notifyPopout.style.display === 'block') {
        notifyPopout.style.display = 'none';
        console.log('time to hide')
    } else {
        notifyPopout.style.display = 'block';
        console.log('time to show')
    }
}

// var closePopout = function () {
//
//
// }
