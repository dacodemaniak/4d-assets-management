/**
 * contact-form
 *  Manage contact form
 */

 // Sets a constant that is the form
 const form = document.getElementById('contact-form')

 // Detect any changes on the form (i.e set an event listener)
 form.addEventListener(
     'keyup', // Event that i want to listen to
     (event) => { // Arrow function : what do i do when change is triggered
        // Have to check all required fields...
        const nameValue = document.getElementById('nom').value
        const phoneValue = document.getElementById('phone').value
        const emailValue = document.getElementById('email').value

        if (nameValue.length > 0 && phoneValue.length > 0 && emailValue.length > 0) {
            document.getElementById('send').removeAttribute('disabled')
        } else {
            document.getElementById('send').setAttribute('disabled', 'disabled')
        }
     }
 )