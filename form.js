var fname = document.getElementById('fname-input')
var lname = document.getElementById('lname-input')
var number = document.getElementById('number-input')
var email = document.getElementById('email-input')
var message = document.getElementById('message-input')



var modal = document.getElementById("modal");
var btn = document.getElementById("popup-btn");
var closeBtn = document.getElementById("find-out");




btn.onclick = function(event) { //function to 'open' de modal.
    var count = 0
    event.preventDefault()
    fname.value === '' || fname.value == null ? alert('First name field is wrong!') & ++count : 0
    lname.value === '' || lname.value == null ? alert('Last name field is wrong!') & ++count : 0
    number.value === '' || number.value == null ? alert('Number field is wrong!') & ++count : 0
    email.value === '' || email.value == null || email.value.includes('@') == false ? alert('Email field is wrong!') & ++count : 0
    message.value === '' || message.value == null ? alert('Message field is wrong!') & ++count : 0
    if (count === 0) {
        modal.style.display = "flex"
        console.log('First name: ' + fname.value)
        console.log('Last name: ' + lname.value)
        console.log('Number: ' + lname.value)
        console.log('email: ' + email.value)
        console.log('Message: ' + message.value)
    }
}

closeBtn.onclick = function() { //function to 'close' de modal.
    modal.style.display = "none";
}
window.onclick = function(event) { //function to 'close' de modal if you click outside of the div.
if (event.target == modal) {
    modal.style.display = "none";
}
}
