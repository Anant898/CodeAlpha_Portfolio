//toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
//scroll sections
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset + height){
            //active navbar links
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href=' + id +']').classList.add('active');
            });
            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeat on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });
    //sticky header
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    
    //remove toogle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY>=document.scrollingElement.
        scrollHeight);
}
//lets discuss
const letsDiscussButton=document.querySelector('.btn-box .btn');
// Email 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact_message');

const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS sendForm method
    emailjs.sendForm('service_9i3gsz6', 'template_x0514cg', '#contact-form', 'X4h4azj-EiOzu1kP3')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully';
        contactMessage.classList.remove('error'); // Remove error class
        contactMessage.classList.add('success'); // Add success class
        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        // Clear input fields
        contactForm.reset();
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error)';
        contactMessage.classList.remove('success'); // Remove success class
        contactMessage.classList.add('error'); // Add error class
    });
};

contactForm.addEventListener('submit', sendEmail);
letsDiscussButton.addEventListener('click', sendEmail);
