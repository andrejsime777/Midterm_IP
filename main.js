// Contact
const contact_FORM = document.getElementById('contact_FORM');
        const emailField = document.getElementById('emailField');
        const lname = document.getElementById('lname');
        const fname = document.getElementById('fname');
        const studentID = document.getElementById('studentID');
        const submitBtn = document.getElementById('submitBtn');
          
        emailField.addEventListener('keyup', function (event) {
         isValid = emailField.checkValidity();
          
          if ( isValid ) {
            submitBtn.disabled = false;
          } else {
            submitBtn.disabled = true;
          }
        });

        lname.addEventListener('keyup', function(event){
        isValid = lname.checkValidity();
          
          if ( isValid ) {
            submitBtn.disabled = false;
          } else {
            submitBtn.disabled = true;
          }

        });

        fname.addEventListener('keyup', function(event){
        isValid = fname.checkValidity();
          
          if ( isValid ) {
            submitBtn.disabled = false;
          } else {
            submitBtn.disabled = true;
          }

        });
        studentID.addEventListener('keyup', function(event){
        isValid = studentID.checkValidity();
          
          if ( isValid ) {
            submitBtn.disabled = false;
          } else {
            submitBtn.disabled = true;
          }

        });
          
        submitBtn.addEventListener('click', function (event) {
          contact_FORM.submit();
        });




// Counter
var enterDate = new Date();
function secondsSinceEnter()
{
  return (new Date() - enterDate) / 1000;
}

// Usage example

document.getElementById("submit").onclick = function() {
    var sec = secondsSinceEnter();
    document.getElementById("results1").innerHTML = " seconds";
};



function saveToLocal() {
    Name=document.submitForm.fName.value;
    Surname=document.submitForm.Surname.value;
    id_=document.submitForm.id_.value;
    Email=document.submitForm.Email.value;
    Comments=document.submitForm.Comments.value;
    let object = 
    {
        Name,
        Surname,
        Email,
        Comments,
        id_
    };
    localStorage.setItem("saved", JSON.stringify(object));
    alert("Successfully saved");
}





function ValidateForm(forma) {
    if (forma.fName.value == "") 
    {
        alert('Name is required.'); 
        forma.fName.focus();
        return false; 
    }
    if (forma.Surname.value.length < 10) 
    {
        alert('Surname is too short.'); 
        forma.Surname.focus();
        return false; 
    }
    if (forma.Surname.value == "") 
    {
        alert('Surname is required.'); 
        forma.Surname.focus();
        return false; 
    }
    if (forma.Email.value == "") 
    { 
        alert('Email address is required.'); 
        forma.Email.focus(); 
        return false; 
    }
    if (forma.id_.value == "") 
    { 
        alert('id_ is required.'); 
        forma.Email.focus(); 
        return false; 
    }
    if (forma.Email.value.indexOf("@") < 1 || forma.Email.value.indexOf(".") < 1) 
    {
         alert('Please enter a valid email address.'); 
         forma.Email.focus(); 
         return false; 
        }

    return false;
}