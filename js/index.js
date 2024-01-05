function nextSlide(params) {
  console.log("next slide")
  $('#carouselExampleCaptions').carousel('next');
}

function sendData(event) {
  console.log("test" + event)
  event.preventDefault()
  var json = JSON.stringify({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
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
    }).then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
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