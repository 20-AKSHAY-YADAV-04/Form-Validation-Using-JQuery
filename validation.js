// let form = document.getElementById("form");
// let FirstName = document.getElementById("FirstName");
// let LastName = document.getElementById("LastName");
// let EmailAddress = document.getElementById("EmailAddress");
// var MobileNumber= document.getElementById("MobileNumber");
// var Qualification= document.getElementById("Qualification");
// var checkHobbies= document.getElementsByName("checkHobbies");
// var CommentBox= document.getElementById("CommentBox");
// let checkboxes = document.getElementsByName("Hobbies");
// let Gender = document.querySelector("input[name = gender]:checked");

// document.querySelector("#form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   formValidationFields();
// });


// function formValidationFields()
// {
//   firstNameValidation();
//   lastNameValidation();
//   emailAddressValidation();
//   mobileNumberValidation();
//   qualificationValidation();
//   hobbiesValidation();
//   commentBoxValidation();

//   if(firstNameValidation()==true && 
//     lastNameValidation()==true && 
//     emailAddressValidation() == true && 
//     mobileNumberValidation()==true && 
//     qualificationValidation()==true && 
//     hobbiesValidation()==true && 
//     commentBoxValidation()==true )
//   {
//     tableDataShow();
//     return true;
//   }
//   else
//   {
//     return false;
//   }
// };

// // First Name Validation Function
// function firstNameValidation()
// {
//   firstNameValue = FirstName.value.trim();
//   validFirstName = /^[A-Za-z]+$/;
//   if (firstNameValue == "")
//   {
//     document.getElementById("firstNameError").innerText ="First Name is required";
//   }
//   else if (!validFirstName.test(firstNameValue))
//   {
//     document.getElementById("firstNameError").innerText ="First Name Must be Only String Without White Spaces";
//   }
//   else
//   {
//     document.getElementById("firstNameError").innerText = "";
//     return true;
//   }
// };

// // Last Name Validation Function
// function lastNameValidation()
// {
//   lastNameValue = LastName.value.trim();
//   validLastName = /^[A-Za-z]+$/;
//   if(lastNameValue == "" )
//   {
//     document.getElementById("lastNameError").innerText ="Last Name is required";
//   }
//   else if (!validLastName.test(lastNameValue))
//   {
//     document.getElementById("lastNameError").innerText ="Last Name Must be Only String Without White Spaces";
//   }
//   else
//   {
//     document.getElementById("lastNameError").innerText = "";
//     return true;
//   }
// };

// // Email Address Validation Function
// function emailAddressValidation()
// {
//   emailValue = EmailAddress.value.trim();
//   validEmailAddress= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if(emailValue=="")
//   {
//     document.getElementById("emailAddressError").innerText ="Email cannot be blank";
//   }
//   else if(!validEmailAddress.test(emailValue))
//   {
//     document.getElementById("emailAddressError").innerText ="Your Entered Email is Not Valid";
//   }
//   else
//   {
//     document.getElementById("emailAddressError").innerText = "";
//     return true;
//   }
// };

// // Mobile Number Validation Function
// function mobileNumberValidation()
// {
//   mobileNumberValue = MobileNumber.value.trim();
//   if(mobileNumberValue=="")
//   {
//     document.getElementById("mobileNumberError").innerText = "Mobile Number is required";
//   }
//   else if(mobileNumberValue.length!=10)
//   {
//     document.getElementById("mobileNumberError").innerText="Mobile Number must have 10 digits";
//   }
//   else
//   {
//     document.getElementById("mobileNumberError").innerText = "";
//     return true;
//   }
// };

// // Qualification Validation Function
// function qualificationValidation()
// {
//   QualificationValue = Qualification.value.trim();
//   if (QualificationValue === "Select Qualification")
//   {
//     document.getElementById("qualificationError").innerText = "Please Select";
//   }
//   else
//   {
//     document.getElementById("qualificationError").innerText="";
//     return true
//   }
// };

// // Hobbies Validation Function
// function hobbiesValidation()
// {
//   var checked = 0;
//   var chkHobbies = document.getElementById("checkHobbies");
//   var chks = chkHobbies.getElementsByTagName("input");
//   for (var i = 0; i < chks.length; i++) {
//     if (chks[i].checked)
//     {
//       checked++;
//     }
//   }
//   if (checked == "")
//   {
//     document.getElementById("hobbiesError").innerText = "Please Select Atleast One or Two hobbiesError";
//   }
//   else 
//   {
//     document.getElementById("hobbiesError").innerText = "";
//     return true;
//   }
// };

// // CommentBox Validation Function
// function commentBoxValidation()
// {
//   CommentBoxValue = CommentBox.value.trim();
//   if (CommentBoxValue == "")
//   {
//     document.getElementById("commentError").innerText = "Please Write Your Commen";
//   }
//   else
//   {
//     document.getElementById("commentError").innerText="";
//     return true
//   }
// };

// // Show Data Function
// tableDataShow = () => {
//   let chk = [];
//   for (let key in checkboxes) {
//     if (checkboxes[key].checked == true) {
//       chk.push(checkboxes[key].value);
//     }
//   }
//   console.log(chk)
//   document.querySelector("#showData").innerHTML += `
//     <tr class="">
//       <th>${FirstName.value}</th>
//       <td>${LastName.value}</td>
//       <td>${EmailAddress.value}</td>
//       <td>${MobileNumber.value}</td>
//       <td>${Qualification.value}</td>
//       <td>${Gender.value}</td>
//       <td>${chk.toString()}</td>
//       <td>${CommentBox.value}</td>
//     </tr>
//   `;
//   form.reset();
// };








// JQuery Form Validation Code Start
$(document).ready(function() {

  // $("FirstName").keyup(function(){
  //   var FirstNameValue = $('#FirstName').val();
  //   const FirstNameRegex = /^[A-Za-z]+$/;
  //   if (FirstNameValue.length == 0)
  //   {
  //     $('#firstNameError').text("First Name is required"); 
  //     $("#firstNameError").focus();
  //     return false;
  //   }
  //   else if (!FirstNameValue.match(FirstNameRegex)) 
  //   {
  //     $('#firstNameError').text("First Name Must be Only String Without White Spaces");
  //     $("#firstNameError").focus();
  //     return false;
  //   }
  //   else
  //   {
  //     $('#firstNameError').text("");
  //     return true
  //   }
  // });

  
  $('#btnSubmit').click(function() {

    FirstNameValidate();
    function FirstNameValidate() {
      let FirstNameValue = $('#FirstName').val();
      const FirstNameRegex = /^[A-Za-z]+$/;
      if (FirstNameValue.length == 0)
      {
        $('#firstNameError').text("First Name is required"); 
      }
      else if (!FirstNameValue.match(FirstNameRegex)) 
      {
        $('#firstNameError').text("First Name Must be Only String Without White Spaces");
      }
      else
      {
        $('#firstNameError').hide();
        return true;
      }
    }

    // let FirstNameValue = $('#FirstName').val();
    // const FirstNameRegex = /^[A-Za-z]+$/;
    // let LastNameValue = $('#LastName').val();
    // const LastNameRegex = /^[A-Za-z]+$/;
    // let EmailAddressValue = $('#EmailAddress').val();
    // const EmailAddressRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let MobileNumberValue = $('#MobileNumber').val();
    // let QualificationValue = $('#Qualification').val();
    // let CommentBoxValue = $('#CommentBox').val();

    // if (FirstNameValue.length == 0)
    // {
    //   $('#firstNameError').text("First Name is required"); 
    //   $("#firstNameError").focus();
    //   return false;
    // }
    // else if (!FirstNameValue.match(FirstNameRegex)) 
    // {
    //   $('#firstNameError').text("First Name Must be Only String Without White Spaces");
    //   $("#firstNameError").focus();
    //   return false;
    // }
    // else if (LastNameValue.length == 0)
    // {
    //   $('#firstNameError').hide();
    //   $('#lastNameError').text("Last Name is required"); 
    //   $("#lastNameError").focus();
    //   return false;
    // }
    // else if (!LastNameValue.match(LastNameRegex))
    // {
    //   $('#lastNameError').text("Last Name Must be Only String Without White Spaces");
    //   $("#lastNameError").focus();
    //   return false;
    // }
    // else if (EmailAddressValue.length == 0)
    // {
    //   $('#lastNameError').hide()
    //   $('#emailAddressError').text("Email Address Cannot be Blank"); 
    //   $("#emailAddressError").focus();
    //   return false;
    // }
    // else if (!EmailAddressValue.match(EmailAddressRegex))
    // {
    //   $('#emailAddressError').text("Please Enter Valid Email Address");
    //   $("#emailAddressError").focus();
    //   return false;
    // }
    // else if (MobileNumberValue.length == 0)
    // {
    //   $('#emailAddressError').hide();
    //   $('#mobileNumberError').text("Mobile Number is required"); 
    //   $("#mobileNumberError").focus();
    //   return false;
    // }
    // else if (MobileNumberValue.length!=10) 
    // {
    //   $('#mobileNumberError').text("Mobile Number must have 10 digits");
    //   $("#mobileNumberError").focus();
    //   return false;
    // }
    // else if (QualificationValue === "Select Qualification")
    // {
    //   $('#mobileNumberError').hide();
    //   $('#qualificationError').text("Please Select"); 
    //   $("#qualificationError").focus();
    //   return false;
    // }
    // else if($('input[type=checkbox]:checked').length == 0)
    // {
    //   $('#qualificationError').hide(); 
    //   $('#hobbiesError').text("Please select at least one Hobby");
    //   return false;
    // }
    // else if (CommentBoxValue === "")
    // {
    //   $('#hobbiesError').hide();
    //   $('#commentError').text("Please Write Your Comment"); 
    //   $("#commentError").focus();
    //   return false;
    // }
    // else
    // {
    //   $('#commentError').hide();
    //   return true
    // }

    // First Name Validation
    // let FirstNameValue = $('#FirstName').val();
    // const FirstNameRegex = /^[A-Za-z]+$/;
    // if (FirstNameValue.length == 0)
    // {
    //   $('#firstNameError').text("First Name is required"); 
    //   $("#firstNameError").focus();
    //   return false;
    // }
    // else if (!FirstNameValue.match(FirstNameRegex)) 
    // {
    //   $('#firstNameError').text("First Name Must be Only String Without White Spaces");
    //   $("#firstNameError").focus();
    //   return false;
    // }
    // else
    // {
    //   $('#firstNameError').text("");
    //   return false
    // }

    // Last Name Validation
    // let LastNameValue = $('#LastName').val();
    // const LastNameRegex = /^[A-Za-z]+$/;
    // if (LastNameValue.length == 0)
    // {
    //   $('#lastNameError').text("Last Name is required"); 
    //   $("#lastNameError").focus();
    //   return false;
    // }
    // else if (!LastNameValue.match(LastNameRegex))
    // {
    //   $('#lastNameError').text("Last Name Must be Only String Without White Spaces");
    //   $("#lastNameError").focus();
    //   return false;
    // }
    // else
    // {
    //   $('#lastNameError').text("");
    //   return false
    // }

    // Email Address Validation
    // let EmailAddressValue = $('#EmailAddress').val();
    // const EmailAddressRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (EmailAddressValue.length == 0)
    // {
    //   $('#emailAddressError').text("Email Address Cannot be Blank"); 
    //   $("#emailAddressError").focus();
    //   return false;
    // }
    // else if (!EmailAddressValue.match(EmailAddressRegex))
    // {
    //   $('#emailAddressError').text("Please Enter Valid Email Address");
    //   $("#emailAddressError").focus();
    //   return false;
    // }
    // else
    // {
    //   $('#emailAddressError').text("");
    //   return false
    // }

    // // Mobile Number Validation
    // let MobileNumberValue = $('#MobileNumber').val();
    // const MobileNumberRegex = /^[A-Za-z]+$/;
    // if (MobileNumberValue.length == 0)
    // {
    //   $('#mobileNumberError').text("Mobile Number is required"); 
    //   $("#mobileNumberError").focus();
    //   return false;
    // }
    // else if (MobileNumberValue.length!=10) 
    // {
    //   $('#mobileNumberError').text("Mobile Number must have 10 digits");
    //   $("#mobileNumberError").focus();
    //   return false;
    // }
    // else
    // {
    //   $('#mobileNumberError').text("");
    //   return false
    // }

    // Qualification Validation
    // let QualificationValue = $('#Qualification').val();
    // if (QualificationValue === "Select Qualification")
    // {
    //   $('#qualificationError').text("Please Select"); 
    //   $("#qualificationError").focus();
    //   return false;
    // }
    // else
    // {
    //   $('#qualificationError').text("");
    //   return false
    // }

    // // Comment Box Validation
    // let CommentBoxValue = $('#CommentBox').val();
    // if (CommentBoxValue === "")
    // {
    //   $('#commentError').text("Please Write Your Comment"); 
    //   $("#commentError").focus();
    //   return false;
    // }
    // else
    // {
    //   $('#commentError').text("");
    //   return false
    // }
  });
  // function FirstNameValidate() {
  //   let FirstNameValue = $('#FirstName').val();
  //   const FirstNameRegex = /^[A-Za-z]+$/;
  //   if (FirstNameValue.length == 0)
  //   {
  //     $('#firstNameError').text("First Name is required"); 
  //   }
  //   else if (!FirstNameValue.match(FirstNameRegex)) 
  //   {
  //     $('#firstNameError').text("First Name Must be Only String Without White Spaces");
  //   }
  //   else
  //   {
  //     $('#firstNameError').hide();
  //     return true;
  //   }
  // }

});
