// Function to add a course to the selected courses section
function addCourse(courseName) {
    const coursesList = document.getElementById('selected-courses-list');
    const listItem = document.createElement('li');
    listItem.textContent = courseName;
    coursesList.appendChild(listItem);
}

// Function to remove a course from the selected courses section
function removeCourse(courseName) {
    const coursesList = document.getElementById('selected-courses-list');
    const items = coursesList.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === courseName) {
            coursesList.removeChild(items[i]);
            break;
        }
    }
}

// Event listener for course selection form submission
document.getElementById('course-selection-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const selectedCourses = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedCourses.push(checkbox.value);
        // Automatically add the course to the selected courses section
        addCourse(checkbox.value);
    });
    selectCourses(selectedCourses); // Call function to handle course selection (for storing in database)
});

// Event listener for delete button click on selected courses
document.getElementById('delete-course-btn').addEventListener('click', function() {
    const selectedCourse = document.getElementById('selected-course').value;
    removeCourse(selectedCourse); // Call function to remove the selected course
});

// Function to fetch and display user's selected courses (optional)
function displayUserCourses() {
    // Fetch user's selected courses from the database (if applicable)
    // For demo purposes, let's just display sample data
    const userCourses = ['Introduction to HTML', 'CSS Fundamentals'];
    const coursesList = document.getElementById('user-courses-list');
    coursesList.innerHTML = ''; // Clear previous content
    userCourses.forEach(course => {
        const listItem = document.createElement('li');
        listItem.textContent = course;
        coursesList.appendChild(listItem);
    });
}

// Event listener for page load
window.addEventListener('load', function() {
    displayUserCourses(); // Fetch and display user's selected courses
});
