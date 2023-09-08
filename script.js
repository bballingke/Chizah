var myButton = document.getElementById('submitBtn');

myButton.addEventListener('click', function(){
    event.preventDefault();
    var firstname = document.getElementById('first_name').value
    var lastname = document.getElementById('last_name').value
    var email = document.getElementById('email').value
    var phoneNumber = document.getElementById('mob_no').value

    if(firstname!= "" && lastname!=""&& email!="" && phoneNumber!=""){
        document.getElementById('cform').innerHTML = "Thank you! For delays, access our contact page.";
    }else{
        document.getElementById('cform').innerHTML = "Error! Something is missing.";
    }
})
