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
    fname.value === '' || fname.value == null ? alert('Please enter a valid first name!') & ++count : 0
    lname.value === '' || lname.value == null ? alert('Please enter a valid last name!') & ++count : 0
    number.value === '' || number.value == null ? alert('Please enter a valid number!') & ++count : 0
    email.value === '' || email.value == null || email.value.includes('@') == false ? alert('Please enter a valid email address!') & ++count : 0
    message.value === '' || message.value == null ? alert('Please enter a valid message!') & ++count : 0
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
