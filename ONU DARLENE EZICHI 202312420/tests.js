//Javascriptfile
//Add JavaScript code here for interactivity (e.g., form validation, dynamiccontent loading)
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
//javascript for date, time and copyright symbol
function updateTime(){
    var date = new Date();
    var day = date.getDay();
    var month= date.getMonth() + 1;
    var year= date.getFullYear();
    var hours= date.getHours();
    var minutes= date.getMinutes();
    var seconds= date.getSeconds();

    //add leading zero if needed
    day= (day<10) ? '0' + day:day;
    month= (month<10) ? '0' + month:month;
    hours= (hours<10) ? '0' + hours:hours;
    minutes= (minutes<10) ? '0' + minutes:minutes;
    seconds= (seconds<10) ? '0' + seconds:seconds;

    document.getElementById("date").innerHTML = year + '-' + month + '-' + day;
    document.getElementById("time").innerHTML = hours + '-' + minutes + '-' + second;
    document.getElementById("year").innerHTML = year;
}

    //update time every second
    setInterval(updateTime, 1000);

    //initial call to display date and time
    updateTime();
    
