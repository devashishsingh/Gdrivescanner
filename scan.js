// Define the required scope for accessing Google Drive API
const SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';

// Client ID of your Google Drive API project
const CLIENT_ID = 'YOUR_CLIENT_ID';

// ID of the container HTML element to display the results
const CONTAINER_ID = 'results-container';

// Load the Google Drive API client
function loadDriveApi() {
  gapi.client.load('drive', 'v3', listDocuments);
}

// Fetch the documents and their metadata
function listDocuments() {
  gapi.client.drive.files.list({
    'pageSize': 10,
    'fields': 'nextPageToken, files(id, name, mimeType, modifiedTime)'
  }).then(response => {
    const files = response.result.files;
    displayResults(files);
  }).catch(err => {
    console.error('Error fetching documents:', err);
  });
}

// Display the results in the HTML container
function displayResults(files) {
  const container = document.getElementById(CONTAINER_ID);

  if (files && files.length > 0) {
    container.innerHTML = '<h2>Documents:</h2>';

    files.forEach(file => {
      const { name, mimeType, modifiedTime } = file;
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${name}</strong> (${mimeType}) - Last modified: ${modifiedTime}`;
      container.appendChild(listItem);
    });
  } else {
    container.innerHTML = '<p>No documents found.</p>';
  }
}

// Initialize the Google API client
function initClient() {
  gapi.client.init({
    clientId: CLIENT_ID,
    scope: SCOPE
  }).then(() => {
    loadDriveApi();
  }).catch(err => {
    console.error('Error initializing client:', err);
  });
}

// Load the Google API client library
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}
