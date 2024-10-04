function nextSlide(event) {
  event.preventDefault()
  $('#carouselExampleCaptions').carousel('next');
}

function sendData(event) {

  event.preventDefault()
  var email = document.getElementById("email").value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(email)) {
    document.getElementById('error-message').innerText = "Invalid email address";
    document.getElementById('error-message').style.display = 'block';
    $('#carouselExampleCaptions').carousel(1);
    return;
  }

  var json = JSON.stringify({
    name: document.getElementById("name").value,
    email: email,
    competitors: document.getElementById("competitors").value,
    occupation: document.getElementById("occupation").value,
    interestedin: document.getElementById("interestedin").value,
    referrer: document.getElementById("referrer").value,
    friend: document.getElementById("friend").value
})
fetch("https://api.drops.nyc/contactUs", { 
    body: json,
    headers: {'Content-Type': 'application/json'},
    method: "POST",
    mode: 'cors',
    cache: 'default',
    })
    .then(response => {
      if (!response.ok) {
      throw new Error('Network response was not ok');
      }
      return response.json();
    })  
    .then((data) => {
    console.log("Success:", data);
    $('#carouselExampleCaptions').carousel('next');
  })
  .catch((error) => {
    console.error("Error:", error);
    // $('#carouselExampleCaptions').carousel('next');
    document.getElementById('error-message').innerText = error.message;
    document.getElementById('error-message').style.display = 'block';
  })
  }

//window.addEventListener("load", () => {

  //create a function that checks the validity of all forms on page
  //if valid, then move to next slide
  //if not valid, then do nothing
  function checkValidity(params) {
    console.log("checkValidity")
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }
//});