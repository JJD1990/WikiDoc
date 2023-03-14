Description
This wiki app was built using React and Python to allow users to create and store plain text documents with multiple revisions. Each document is uniquely identified by a maximum 50 character title and has a list of historical revisions that can be viewed at any point in time. The app is a Single Page Application (SPA) that includes a list of documents, document details with the latest revision formatted in markdown, and a list of revisions. Users can choose a revision and view the document at that time, or post a new revision of the document.

---

Dependencies
The following dependencies are required to run the app:

@popperjs/core: version 2.11.6
@testing-library/jest-dom: version 5.16.5
@testing-library/react: version 12.0.4
@testing-library/user-event: version 12.0.9
axios: version 1.3.4
bootstrap: version 5.2.3
moment: version 2.29.4
react: version 17.0.2
react-dom: version 17.0.2
react-markdown: version 8.0.5
react-router-dom: version 6.9.0
react-scripts: version 5.0.1
sass: version 1.59.2
web-vitals: version 2.1.4

---

Installation
Clone the repository to your local machine running
`git clone https://github.com/JJD1990/WikiDoc`

Install the necessary dependencies by running the following command in the project directory:

run:
npm install
Note: This project was bootstrapped with Create React App but it has been downgraded to React version 17.0.2. If you encounter issues related to React version incompatibility, try deleting the node_modules directory and running npm install again. If the problem persists, make sure that the relevant parts in the package.json file have been modified to use React 17.0.2 and that the index.js file has been updated accordingly.
see here for details - https://stackoverflow.com/questions/46566830/how-to-use-create-react-app-with-an-older-react-version

Start the development server by running the following command:

run
`npm start`
This will start the server and open the application in your default browser.

To run the tests, use the following command:

`npm test`
This will launch the test runner in interactive watch mode.

To connect the React application to the Python Backend add the below code to your package.json:
`"proxy":"http://localhost:5003",`
This will allow you to connect to the python backend.
for assistance review:
https://www.youtube.com/watch?v=7LNl2JlZKHA

---

Issues faced
During the development of this project, several issues were faced, including implementing the API calls to the Python backend, making the app a single page application, and downgrading React to a more stable version from 18 to 17.0.2. Additionally, setting up the post request to edit information on the backend and fetching the data in a way that would render on the show page and in the edit form proved to be challenging. Finally, implementing the tests also presented its own set of difficulties. Despite these challenges, the project was completed successfully, and the end result is a fully functional wiki-style application.

---

Scope for Improvments
Obciously implementing the api calls properly to allow page content to be accessible.
Adding pagination
Adding search functionality
Once a revision is created, making that the latest revision and pushing the last version into the 'revisionlist'

---

Resources
https://stackoverflow.com/
https://www.youtube.com/
https://chat.openai.com/chat
https://www.google.com/
