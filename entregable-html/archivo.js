function mostrarValoresFormulario() {
       // Obtener el formulario por su id
        var form = document.getElementById("myForm");

        // Obtener todos los campos del formulario
        var firstName = form.elements["Name"].value;
        var lastName = form.elements["LastName"].value;
        var email = form.elements["email"].value;
        var companyName = form.elements["CompanyName"].value;
        var phoneNumber = form.elements["PhoneNumber"].value;
        var message = form.elements["Message"].value;

        // Construir el mensaje con los valores del formulario
        var mensaje = "First Name: " + firstName + "\n" +
                      "Last Name: " + lastName + "\n" +
                      "Email Address: " + email + "\n" +
                      "Company Name: " + companyName + "\n" +
                      "Phone Number: " + phoneNumber + "\n" +
                      "Message: " + message;

        // Mostrar los valores en una ventana de alerta
        console.log(mensaje);
        window.alert(mensaje);
}