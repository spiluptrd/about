let sendMail = document.getElementById("send-mail");
let form = document.getElementById("form-container");
let cross = document.getElementById("cross")
let fname = document.getElementById("fname")
let email = document.getElementById("Email")
let number = document.getElementById("pnumber")
let comment = document.getElementById("text")
// Call the function to apply the styles
sendMail.addEventListener('click',()=>{
    console.log('Click event triggered');
    form.style.visibility = 'visible';    
})

cross.addEventListener('click',()=>{
    form.style.visibility = 'hidden';
})
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event){
        console.log('Click event triggered');
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_7y0f4ub", "template_9rzij1a", this)
        .then(function(response) {
            console.log('SUCCESS!', response);

            fname.value = "";
            email.value = "" ;
            number.value = "";
            comment.value = "";

            let subscribe = document.getElementById('submit')
            console.log('na me')
            subscribe.value = 'DONE'
            subscribe.style.animationName = 'done';
            let Subscribe = setTimeout(sub, 2800);
            function sub(){
                subscribe.value = 'Submit'
                subscribe.style.animationName = '';
            }
            
        }, function(error) {
            console.log('FAILED...', error);
        });
    });
}

            // let subscribe = document.getElementById('submit')
            // subscribe.value = 'unable to submit'
            // subscribe.style.animationName = 'failed';
            // let Subscribe = setTimeout(sub, 4000);
            // function sub(){
            //     subscribe.value = 'Submit'
            // }
    // let style = () => {
    //     let styling = `
    //         /* Your CSS styles go here */
            
    //         /* Add more styles as needed
    //          */
    //     `;
    //     let stylings = document.createElement('style');
    //     stylings.appendChild(document.createTextNode(styling));
    //     document.head.appendChild(stylings);
    // }