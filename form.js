var fname = document.getElementById('fname-input')
var lname = document.getElementById('lname-input')
var number = document.getElementById('number-input')
var email = document.getElementById('email-input')
var message = document.getElementById('message-input')



var modal = document.getElementById("modal");
var btn = document.getElementById("popup-btn");
var closeBtn = document.getElementById("find-out");




btn.onclick = function(event) { //function to 'open' de modal.
    event.preventDefault()
    typeof fname.value == 'string' ? console.log('First name: ' + fname.value) : NaN
    typeof lname.value == 'string' ? console.log('Last name: ' + lname.value) : NaN
    typeof number.value == 'string' ? console.log('Number: ' + lname.value) : NaN
    email.value.includes('@') == true ? console.log('email: ' + email.value) : NaN
    typeof message.value == 'string' ? console.log('Message: ' + message.value) : NaN
    modal.style.display = "flex";
}

closeBtn.onclick = function() { //function to 'close' de modal.
    modal.style.display = "none";
}
window.onclick = function(event) { //function to 'close' de modal if you click outside of the div.
if (event.target == modal) {
    modal.style.display = "none";
}
}
