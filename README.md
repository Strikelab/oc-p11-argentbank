# oc-p11-argentbank

Projet N°11 du parcours intégrateur web OpenClassrooms

[![Money Money Money !!!](https://ftp.strikelab.fr/images/oc/argentbank_preview.png)](https://oc-argentbank.strikelab.fr/)

## Live demo:

[https://oc-argentbank.strikelab.fr](https://oc-argentbank.strikelab.fr/)

## Swagger API Proposal:

Explore the proposed API endpoints using Swagger documentation. The API is designed to provide comprehensive functionality for the project.

[Swagger Documentation](https://oc-argentbank.strikelab.fr/api-docs/)

Feel free to review the API documentation to understand the available endpoints, request methods, and expected responses.

For any questions or suggestions related to the API, please feel free to reach out.


## Running the Backend:

To use the backend, ensure you have Node.js version 16.20.2 installed. You can follow these steps using Node Version Manager (NVM):

1. **Install NVM:**
    - If you don't have NVM installed, you can follow these steps:
        - Install NVM by following the instructions at [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).
        - Open a new terminal window.

2. **Install Node.js version 16.20.2:**
    - Run the following command to install Node.js version 16.20.2:
        ```bash
        nvm install 16.20.2
        ```

3. **Set Node.js version 16.20.2 as the default for your project:**
    - Once the installation is complete, set Node.js version 16.20.2 as the default for your project:
        ```bash
        nvm use 16.20.2
        ```

Now your project should be running with Node.js version 16.20.2.

## Legacy API:

- The original OpenClassrooms API is available here: [Openclassrooms's legacy API](https://github.com/OpenClassrooms-Student-Center/ArgentBank-website).
- Please note: As of the last check, the OpenClassrooms API is not actively maintained and may have stability issues. It currently relies on Node.js version <17.

Feel free to use any API of your choice. You just need to create a link to your API.

Please note: Configuration details, including sensitive information, may be stored in a `.env` file.  
When linking to your API, ensure that the path is configured in the `.env` file. You can set the API path by adding the following line:

```env
REACT_APP_API_PATH=YOUR_API_URL
