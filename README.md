Description
This is a wiki app built with React and Python. It allows users to create pages, add revisions to those pages, and view a list of revisions for each page.

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

Installation
Clone the repository to your local machine running

Install the necessary dependencies by running the following command in the project directory:

run:
npm install
Note: This project was bootstrapped with Create React App but it has been downgraded to React version 17.0.2. If you encounter issues related to React version incompatibility, try deleting the node_modules directory and running npm install again. If the problem persists, make sure that the relevant parts in the package.json file have been modified to use React 17.0.2 and that the index.js file has been updated accordingly.
see here for details - https://stackoverflow.com/questions/46566830/how-to-use-create-react-app-with-an-older-react-version

Start the development server by running the following command:

run
npm start
This will start the server and open the application in your default browser.

To run the tests, use the following command:

npm test
This will launch the test runner in interactive watch mode.
