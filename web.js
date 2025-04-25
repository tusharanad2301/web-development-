document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('ul#ul1 li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation for Sign Up (Section 2)
    const form = document.querySelector('#sec2 form');
    const fname = document.querySelector('#fname');
    const lname = document.querySelector('#lname');
    const password = document.querySelector('#pd');
    const country = document.querySelector('#country');
    const submitBtn = form.querySelector('input[type="submit"]');

    form.addEventListener('submit', function(e) {
        let valid = true;

        // Validate First Name
        if (fname.value.trim() === '') {
            alert('First Name is required');
            valid = false;
        }

        // Validate Last Name
        if (lname.value.trim() === '') {
            alert('Last Name is required');
            valid = false;
        }

        // Validate Password
        if (password.value.trim() === '') {
            alert('Password is required');
            valid = false;
        }

        // Validate Country Selection
        if (country.value === 'country') {
            alert('Please select a country');
            valid = false;
        }

        if (!valid) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Button "See Courses" Click Effect (Section 1)
    const seeCoursesBtn = document.querySelector('.abu');
    seeCoursesBtn.addEventListener('click', function() {
        // Scroll to the courses section
        const coursesSection = document.querySelector('#section3');
        coursesSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Button "Join Us Now" Click Effect (Section 3)
    const joinUsBtn = document.querySelector('#b2');
    joinUsBtn.addEventListener('click', function() {
        // Scroll to the sign-up section
        const signUpSection = document.querySelector('#section2');
        signUpSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Handling Icon Hover Effects
    const searchIcon = document.querySelector('.fa-magnifying-glass');
    const userIcon = document.querySelector('.fa-user');
    const envelopeIcon = document.querySelector('.fa-envelope');

    // Adding hover effect (change color on hover)
    [searchIcon, userIcon, envelopeIcon].forEach(icon => {
        icon.addEventListener('mouseover', function() {
            icon.style.color = '#f39c12'; // Change to gold on hover
        });
        icon.addEventListener('mouseout', function() {
            icon.style.color = ''; // Reset color on mouse out
        });
    });

    // Handling Sign-Up Already a Member Link (Section 2)
    const alreadyMemberLink = document.querySelector('#a1');
    alreadyMemberLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to login page...');
        // You can add a real redirect here like:
        // window.location.href = 'login.html';
    });

    // Handling Social Media Icons Click
    const fbIcon = document.querySelector('#social-fb');
    const twitterIcon = document.querySelector('#social-tw');
    const googlePlusIcon = document.querySelector('#social-gp');
    const emailIcon = document.querySelector('#social-em');

    fbIcon.addEventListener('click', function() {
        window.open('https://www.facebook.com/LondonAcademyIn/about', '_blank');
    });

    twitterIcon.addEventListener('click', function() {
        window.open('https://twitter.com/', '_blank');
    });

    googlePlusIcon.addEventListener('click', function() {
        window.open('https://london-academy.in/', '_blank');
    });

    emailIcon.addEventListener('click', function() {
        window.open('mailto:hello.londonenglish@gmail.com', '_blank');
    });
});
