const jobApplications = [];

// Function to render job applications to the table
function renderJobApplications() {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = jobApplications.map(app =>
        `<tr class="hover:bg-gray-100">
            <td class="px-4 py-3">${app.date}</td>
            <td class="px-4 py-3">${app.company}</td>
            <td class="px-4 py-3">${app.position}</td>
            <td class="px-4 py-3">${app.contractType}</td>
            <td class="px-4 py-3">${app.source}</td>
            <td class="px-4 py-3">${app.followUpDate}</td>
            <td class="px-4 py-3">${app.status}</td>
            <td class="px-4 py-3">${app.employerResponse}</td>
            <td class="px-4 py-3">${app.responseMode}</td>
            <td class="px-4 py-3">${app.reasons}</td>
            <td class="px-4 py-3">${app.interview}</td>
            <td class="px-4 py-3">${app.profiles}</td>
            <td class="px-4 py-3">${app.documentsSent}</td>
        </tr>`
    ).join('');
}

// Function to handle form submission
document.getElementById('jobApplicationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const newApplication = {};
    for (const [key, value] of formData.entries()) {
        newApplication[key] = value;
    }
    
    jobApplications.push(newApplication);
    renderJobApplications();
    event.target.reset(); // Reset form after submission
});

// Function to export data to Excel
document.getElementById('exportButton').addEventListener('click', function () {
    // Export functionality here
    // You would need to implement or link a library for exporting to Excel
});

// Render job applications on document load
document.addEventListener('DOMContentLoaded', renderJobApplications);
