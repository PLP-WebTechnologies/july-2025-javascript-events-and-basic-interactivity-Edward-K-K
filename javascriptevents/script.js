// Part 1: JavaScript Event Handling and Interactive Elements
document.getElementById('messageButton').addEventListener('click', function() {
    document.getElementById('messageOutput').textContent = 'Hello! You clicked the button.';
});

document.getElementById('toggleButton').addEventListener('click', function() {
    const content = document.getElementById('toggleContent');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});

// Part 2: Building Interactive Elements

// Light/Dark Mode Toggle
document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Counter
let counter = 0;
document.getElementById('counterIncrement').addEventListener('click', function() {
    counter++;
    document.getElementById('counterValue').textContent = counter;
});

document.getElementById('counterDecrement').addEventListener('click', function() {
    counter--;
    document.getElementById('counterValue').textContent = counter;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll('.faqQuestion');
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'none') {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});

// Part 3: Form Validation with JavaScript
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    if (isValid) {
        document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
    } else {
        document.getElementById('formSuccess').textContent = '';
    }
});
