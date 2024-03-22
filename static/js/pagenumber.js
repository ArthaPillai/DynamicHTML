document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section'); // Assuming each 'section' tag should receive a page number
    sections.forEach((section, index) => {
        const pageNumberElement = document.createElement('div');
        pageNumberElement.className = 'page-number';
        pageNumberElement.textContent = 'Page ' + (index + 1); // Adjust as needed
        section.appendChild(pageNumberElement);
    });
});
