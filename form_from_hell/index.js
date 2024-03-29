let isInstructionsRead = false;

//flag for if the user has read instructions
function readInstructions(){
    isInstructionsRead = true;
    console.log(isInstructionsRead);
}

//main loop to run for validation
function submitForm(){
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let doneArr = document.getElementsByName('doneRadio');
    let done = null;
    if (doneArr[0].checked === true){
        done = doneArr[0].value;
    }
    if (doneArr[1].checked === true){
        done = doneArr[1].value;
    }

    //email validtion check
    if (email.slice(-4) != '.com' && email.slice(-4) != '.edu' && email.slice(-4) != '.org'){
        alert('Not a valid email address extension.');
        return;
    }
    if (email.slice(8, 9) != '@' || email.slice(0, 4) != 'Josh'){
        alert('The local-part in front of the @ must be exactly 8 characters long and start with "Josh".');
        return;
    }
    if (email.slice(9) != 'gmail.com' && email.slice(9) != 'yahoo.com' && email.slice(9) != 'rit.edu') {
        alert('Domain not valid, must be "rit.edu" or "yahoo.com" or "gmail.com".')
        return;
    }

    //password validation check
    if (password.length < 8 || password.length > 16){
        alert('Password must be 8-16 characters in length.');
        return;
    }

    //check to see if user has selected yes for the done field
    if (done === null){
        alert("Sorry you didn't select if you were done or not, so you must restart from scratch.")
        document.location.reload();
        return;
    }
    if (done === 'no'){
        alert('Please select yes if you are done with the form.');
        return;
    }

    //background color check, can't submit if they have messed with color selector.
    if (document.body.style.backgroundColor != ''){
        alert("Sorry form not submittable.  You weren't suppssed to mess with the color selector.  Hmm...I should probably remove it...");
        return;
    }

    //They have to have clicked confirm in instructions read to be able to submit.
    if (isInstructionsRead === false) {
        alert("Sorry form is not submitable because you didn't read the instructions. The page will now be relaoded and you have to start from scratch.");
        document.location.reload();
        return;
    }
 
    //succesful completion of form
    let elems = document.getElementsByTagName('form');
    elems[0].parentNode.removeChild(elems[0]);
    let msgElem = document.createElement('h1');
    msgElem.setAttribute('id', 'msg')
    msgElem.innerHTML = 'Wow good job, you know how to complete a form!';
    document.getElementById('main').appendChild(msgElem);
    setInterval(function(){ 
        if (document.body.style.backgroundColor === 'white'){
            document.body.style.backgroundColor = 'black';
            document.getElementById('msg').style.color = 'white';
        }
        else if (document.body.style.backgroundColor === 'black'){
            document.body.style.backgroundColor = 'white';
            document.getElementById('msg').style.color = 'black';
        }
        else{
            document.body.style.backgroundColor = 'white';
        } 
    }, 500);
}

//rloads the entire page
function resetForm(){
    let confirmReset = confirm('Are you sure you want to reset?');
    if (confirmReset) {
        document.location.reload();
    }
}

//changes background color of page
function changeColor(color){
    document.body.style.backgroundColor = color;
}