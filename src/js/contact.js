(function(){
    emailjs.init("user_qEge2f8pRu8IucU4BnAH0");
}) ();

document.getElementById("contact-submit").addEventListener("click", enviarGmail);

function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}

function enviarGmail() {
  event.preventDefault()
  let data = {
    from_name: document.getElementById("form-name").value,
    from_email: document.getElementById("form-email").value,
    phone: document.getElementById("form-phone").value,
    message: document.getElementById("form-message").value
  };


  emailjs.send("service_3jpnylp", "template_js9tneq", data).then(
    function (response) {
      if (response.text === "OK") {
        alert("El correo se ha enviado de forma exitosa")
        location.reload()
      }
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text)
    },
    function (err) {
      alert('Ocurrio un problema al enviar el correo');
      console.log("FAILED. error=", err)
      location.reload()
    })
}
