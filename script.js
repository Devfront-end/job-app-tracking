document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('jobApplicationForm');
    const jobApplicationTable = document.getElementById('jobApplicationTable');
  
    // Initialize jobApplications from localStorage or empty array
    let jobApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];
  
    // Function to render job applications to the table
    function renderJobApplications() {
      const tbody = document.querySelector('table tbody');
      tbody.innerHTML = jobApplications.map((app, index) =>
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
          <td class="px-4 py-3">
            <button type="button" class="delete-button" onclick="deleteApplication(${index})">Delete</button>
          </td>
        </tr>`
      ).join('');
    }
  
    // Function to handle form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const formData = new FormData(event.target);
      const newApplication = {};
      for (const [key, value] of formData.entries()) {
          newApplication[key] = value;
      }
      
      jobApplications.push(newApplication);
      localStorage.setItem('jobApplications', JSON.stringify(jobApplications));
      renderJobApplications();
      event.target.reset();
    });
  
    // Delete application function
    window.deleteApplication = function(index) {
      jobApplications.splice(index, 1);
      localStorage.setItem('jobApplications', JSON.stringify(jobApplications));
      renderJobApplications();
    }
  
    // Render job applications on document load
    renderJobApplications();
  });
  