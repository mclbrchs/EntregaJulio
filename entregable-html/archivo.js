function mostrarValoresFormulario() {
        var form = document.getElementById("myForm");

        var firstName = form.elements["Name"].value;
        var lastName = form.elements["LastName"].value;
        var email = form.elements["email"].value;
        var companyName = form.elements["CompanyName"].value;
        var phoneNumber = form.elements["PhoneNumber"].value;
        var message = form.elements["Message"].value;

        var mensaje = "First Name: " + firstName + "\n" +
                      "Last Name: " + lastName + "\n" +
                      "Email Address: " + email + "\n" +
                      "Company Name: " + companyName + "\n" +
                      "Phone Number: " + phoneNumber + "\n" +
                      "Message: " + message;

        console.log(mensaje);
        window.alert(mensaje);
}