function validateAndGenerate() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const schooling = document.getElementById('schooling').value;
    const intermediate = document.getElementById('intermediate').value;
    const degree = document.getElementById('degree').value;
    const cgpa = document.getElementById('cgpa').value;
    const gradYear = document.getElementById('gradYear').value;
    const programminglanguagesknown = document.getElementById('programminglanguagesknown').value;
    const company = document.getElementById('company').value;
    const role = document.getElementById('role').value;
    const duration = document.getElementById('duration').value;

    if (!name || !email || !phone || !schooling || !intermediate || !degree || !cgpa || !gradYear || !programminglanguagesknown || !company || !role || !duration) {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateName(name)) {
        alert('Please enter a valid name without numbers.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number (10 digits).');
        return;
    }

    if (!validateGradYear(gradYear)) {
        alert('Please enter a valid graduation year (between 1900 and 2099).');
        return;
    }

    generateResume(name, email, phone, schooling, intermediate, degree, cgpa, gradYear, programminglanguagesknown, company, role, duration);
}

function validateName(name) {
    const re = /^[A-Za-z\s]+$/;
    return re.test(name);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
}

function validateGradYear(gradYear) {
    const year = parseInt(gradYear, 10);
    return year >= 1900 && year <= 2099;
}

function generateResume(name, email, phone, schooling, intermediate, degree, cgpa, gradYear, programminglanguagesknown, company, role, duration) {
    const resumeContent = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <hr>
        <h3>Education</h3>
        <p>Schooling: ${schooling}</p>
        <p>Intermediate: ${intermediate}</p>
        <p>Degree: ${degree}</p>
        <p>CGPA: ${cgpa}</p>
        <p>Graduation Year: ${gradYear}</p>
        <hr>
        <h3>Skills</h3>
        <p>Programming Languages Known: ${programminglanguagesknown}</p>
        <h3>Work Experience</h3>
        <p>Company: ${company}</p>
        <p>Role: ${role}</p>
        <p>Duration: ${duration}</p>
    `;

    document.getElementById('resumeContent').innerHTML = resumeContent;

    const qrValue = `https://sai-shiva-ram.github.io/Qr-Resume-Builder//resume.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&schooling=${encodeURIComponent(schooling)}&intermediate=${encodeURIComponent(intermediate)}&degree=${encodeURIComponent(degree)}&cgpa=${encodeURIComponent(cgpa)}&gradYear=${encodeURIComponent(gradYear)}&programminglanguagesknown=${encodeURIComponent(programminglanguagesknown)}&company=${encodeURIComponent(company)}&role=${encodeURIComponent(role)}&duration=${encodeURIComponent(duration)}`;

    const qr = new QRious({
        element: document.getElementById('qrCode'),
        value: qrValue,
        size: 200
    });
}
