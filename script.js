const jobApplications = [];

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

document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newJobApplication = {
        date: document.getElementById('date').value,
        company: document.getElementById('company').value,
        position: document.getElementById('position').value,
        contractType: document.getElementById('contractType').value,
        source: document.getElementById('source').value,
        followUpDate: document.getElementById('followUpDate').value,
        status: document.getElementById('status').value,
        employerResponse: document.getElementById('employerResponse').value,
        responseMode: document.getElementById('responseMode').value,
        reasons: document.getElementById('reasons').value,
        interview: document.getElementById('interview').value,
        profiles: document.getElementById('profiles').value,
        documentsSent: document.getElementById('documentsSent').value,
    };

    jobApplications.push(newJobApplication);
    renderJobApplications();
    event.target.reset();
});

document.addEventListener('DOMContentLoaded', renderJobApplications);
