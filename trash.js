// Save form data from Form 1 to sessionStorage
function saveForm1() {
    var name = document.getElementById('name').value;
    sessionStorage.setItem('name', name);
    console.log("hello")

    // Proceed to Form 2
    // ...

    // window.location.href="trash2.html"
    
    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'block';
  }

  // Save form data from Form 2 to sessionStorage
  function saveForm2() {
    var email = document.getElementById('email').value;
    sessionStorage.setItem('email', email);

    // Submit the form or perform further actions
    // ...
  }

  // Load data from sessionStorage and populate Form 1 fields
  function loadForm1Data() {
    var name = sessionStorage.getItem('name');
    if (name) {
      document.getElementById('name').value = name;
    }
  }

  // Load data from sessionStorage and populate Form 2 fields
  function loadForm2Data() {
    var email = sessionStorage.getItem('email');
    if (email) {
      document.getElementById('email').value = email;
    }
  }

  // Go back to Form 1
  function goToForm1() {
    // Save data from Form 2 to sessionStorage
    saveForm2();

    // Load data from sessionStorage and populate Form 1 fields
    loadForm1Data();

    // Hide Form 2 and show Form 1
    document.getElementById('form2').style.display = 'none';
    document.getElementById('form1').style.display = 'block';
  }

  // Check if Form 1 data is available in sessionStorage and load it
  document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('name')) {
      loadForm1Data();
    }
  });

  // Check if Form 2 data is available in sessionStorage and load it
  document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('email')) {
      loadForm2Data();
    }
  });