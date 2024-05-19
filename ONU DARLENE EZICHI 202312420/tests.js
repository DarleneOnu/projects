//Javascript file
// Add JavaScript code here for interactivity (e.g., form validation, dynamiccontent loading)
// Example: Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event)
{
event.preventDefault();
// Perform form validation and submission
// Display success or error message
alert(' Form submitted successfully!');
});''   
// Filtering button code
function filterProjects(filter) {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        if (filter === 'all') {
            project.style.display = 'block';
        } else {
            if (project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        }
    });
}
