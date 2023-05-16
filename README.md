# Gdrivescanner
The code scans for the type of files in a google drive and displays the result with name, MIME type and last modified times

To set up your Windows environment to execute the JavaScript code, you need to follow these steps:

Install a web browser: If you don't have one installed already, download and install a web browser like Google Chrome, Mozilla Firefox, or Microsoft Edge.

Create a directory: Create a directory on your computer where you want to store the HTML file and the JavaScript file. For example, you can create a folder called "GoogleDrive" on your desktop.

Create the HTML file: Open a text editor (e.g., Notepad) and create a new file. Copy and paste the HTML code provided earlier into the file. Save the file with a .html extension, such as index.html, inside the directory you created in the previous step (GoogleDrive).

Create the JavaScript file: Open another text editor window and create a new file. Copy and paste the JavaScript code provided earlier into the file. Save the file with a .js extension, such as script.js, inside the same directory as the HTML file (GoogleDrive).

Get the Google Drive API credentials: Follow the steps outlined in the Google Drive API documentation to create a project, enable the Drive API, and obtain your client ID. Make sure to configure the authorized JavaScript origins and redirect URIs appropriately.

Link the JavaScript files: Open the HTML file (index.html) you created earlier in a text editor and add the following line just before the closing </body> tag:

html
Copy code
<script src="https://apis.google.com/js/api.js"></script>
<script src="script.js"></script>
Replace the placeholder client ID: In the script.js file you created earlier, locate the line that says 'YOUR_CLIENT_ID' and replace it with your actual client ID obtained from the Google Drive API credentials.

Open the HTML file in a web browser: Double-click on the HTML file (index.html) you created earlier, and it should open in your default web browser.

Authenticate and run the script: Once the HTML file opens in the browser, it will initiate the Google Sign-In process. Sign in with your Google account to authorize the script to access your Google Drive. After authentication, the script will fetch the list of documents and display them in the specified HTML container.

By following these steps, you should be able to set up and execute the JavaScript code in a Windows environment to fetch the types of documents from your authenticated Google Drive.
