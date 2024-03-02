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

function exportToExcel() {
    var table = document.querySelector("table");
    var workbook = XLSX.utils.table_to_book(table);
    XLSX.writeFile(workbook, 'job_application_tracking.xlsx');
}

function exportToGoogleSheets() {
    // Chargez l'API cliente pour les feuilles de calcul Google.
    gapi.client.load('sheets', 'v4', function() {
        // ID de la feuille de calcul. Remplacez par l'ID de votre feuille de calcul.
        var spreadsheetId = '1BFvp6d35Bxi260YLnJGlDHQs_prHT7s9OUQduzYjt1k';

        // La plage à laquelle les données seront écrites. Remplacez par la plage souhaitée.
        var range = 'Sheet1!A1:M';

        // Récupérez les données du tableau jobApplications.
        var headers = [
            'Date d\'envoi', 'Nom de l\'entreprise', 'Dénomination du poste', 'Type de contrat', 'Source de l\'offre',
            'Date de relance', 'Statut', 'Réponse de l\'employeur', 'Mode de réponse', 'Motifs', 'Entretien', 'Mes profils', 'Documents envoyés'
        ];
        var data = jobApplications.map(app => [
            app.date, app.company, app.position, app.contractType, app.source,
            app.followUpDate, app.status, app.employerResponse, app.responseMode, app.reasons,
            app.interview, app.profiles, app.documentsSent
        ]);
        var values = [headers].concat(data);

        var resource = {
            values: values
        };

        // Écrit les données dans la feuille de calcul.
        var request = gapi.client.sheets.spreadsheets.values.update({
            spreadsheetId: spreadsheetId,
            range: range,
            valueInputOption: 'RAW',
            resource: resource
        });

        request.execute(function(response) {
            console.log('Les données ont été écrites dans la feuille de calcul avec succès.');
        });
    });
}


// Chargez la bibliothèque cliente de l'API Google Sheets
gapi.load('client:auth2', function() {
    gapi.auth2.init({
      client_id: '272801952774-9638ikfhmc97rujk337haqv4cicun0p6.apps.googleusercontent.com'
    }).then(function() {
      // Récupérez les données saisies dans le formulaire
      var date = document.getElementById('date').value;
      var company = document.getElementById('company').value;
      var position = document.getElementById('position').value;
      var contractType = document.getElementById('contractType').value;
      var source = document.getElementById('source').value;
      var followUpDate = document.getElementById('followUpDate').value;
      var status = document.getElementById('status').value;
      var employerResponse = document.getElementById('employerResponse').value;
      var responseMode = document.getElementById('responseMode').value;
      var reasons = document.getElementById('reasons').value;
      var interview = document.getElementById('interview').value;
      var profiles = document.getElementById('profiles').value;
      var documentsSent = document.getElementById('documentsSent').value;
  
      // Créez une nouvelle ligne de données
      var values = [
        [date, company, position, contractType, source, followUpDate, status, employerResponse, responseMode, reasons, interview, profiles, documentsSent]
      ];
  
      // Définissez les paramètres de la demande d'écriture
      var resource = {
        values: values
      };
      var params = {
        spreadsheetId: '1BFvp6d35Bxi260YLnJGlDHQs_prHT7s9OUQduzYjt1k', 
        range: 'Sheet1!A1:M',
        valueInputOption: 'RAW',
        resource: resource
      };
  
      // Autorisez l'utilisateur et envoyez la demande d'écriture
      gapi.client.request({
        path: '/sheets/v4/spreadsheets/{spreadsheetId}/values/{range}:append',
        method: 'POST',
        params: params
      }).then(function(response) {
        console.log('Données envoyées avec succès');
      }, function(error) {
        console.error('Erreur lors de l\'envoi des données : ' + error);
      });
    });
  });
  
  // Sélectionnez le bouton de soumission de formulaire
var submitButton = document.getElementById('submit-button');

// Ajoutez un gestionnaire d'événements au bouton de soumission de formulaire
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Empêchez la soumission du formulaire par défaut

  // Récupérez les données saisies dans le formulaire
  var date = document.getElementById('date').value;
  var company = document.getElementById('company').value;
  var position = document.getElementById('position').value;
  var contractType = document.getElementById('contractType').value;
  var source = document.getElementById('source').value;
  var followUpDate = document.getElementById('followUpDate').value;
  var status = document.getElementById('status').value;
  var employerResponse = document.getElementById('employerResponse').value;
  var responseMode = document.getElementById('responseMode').value;
  var reasons = document.getElementById('reasons').value;
  var interview = document.getElementById('interview').value;
  var profiles = document.getElementById('profiles').value;
  var documentsSent = document.getElementById('documentsSent').value;

  // Créez une nouvelle ligne de données
  var values = [
    [date, company, position, contractType, source, followUpDate, status, employerResponse, responseMode, reasons, interview, profiles, documentsSent]
  ];

  // Définissez les paramètres de la demande d'écriture
  var resource = {
    values: values
  };
  var params = {
    spreadsheetId: '1BFvp6d35Bxi260YLnJGlDHQs_prHT7s9OUQduzYjt1k',
    range: 'Sheet1!A1:M',
    valueInputOption: 'RAW',
    resource: resource
  };

  // Autorisez l'utilisateur et envoyez la demande d'écriture
  gapi.client.request({
    path: '/sheets/v4/spreadsheets/{spreadsheetId}/values/{range}:append',
    method: 'POST',
    params: params
  }).then(function(response) {
    console.log('Données envoyées avec succès');

    // Soumettez le formulaire à votre application
    document.getElementById('jobApplicationForm').submit();
  }, function(error) {
    console.error('Erreur lors de l\'envoi des données : ' + error);
  });
});
