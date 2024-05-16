# VueAvonova

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Build](#build)
- [Testing](#testing)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [Onboarding New Developers](#onboarding-new-developers)
- [License](#license)

## Overview
VueAvonova is a modern web application designed to streamline and enhance [specific business operations or user activities the project targets]. Built with Vue.js and TypeScript, the project aims to deliver a robust, scalable, and maintainable platform. The application integrates various technologies to provide a seamless user experience, efficient data management, and powerful backend services.

## Features
- **User Authentication**: Secure user registration and login using Supabase.
- **Data Management**: Efficient data handling and querying using Prisma ORM.
- **Responsive Design**: Fully responsive design with Tailwind CSS for optimal user experience on all devices.
- **Fast Development and Build**: Leveraging Vite for a fast and efficient development and build process.
- **Type Safety**: Ensuring type safety throughout the application with TypeScript.
- **Unit Testing**: Comprehensive unit tests using Vitest to ensure code reliability.

### Login Page
Login is done with Supabase where the user is already authenticated beforehand just like it would be in the case of an Avonova customer, and is then redirected to the home page if the user session is validated from Supabase.
There are 5 customer email accounts in the DB:

- sales@techsolutions.as
- support@healthcorp.as
- info@ecobuild.as
- contact@novatech.no

The password is **admin** for all of them.

## Technologies
The project utilizes several modern web development technologies:

- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, providing type safety and enhanced development experience.
- **Vite**: A next-generation frontend tooling that is used for building and serving the project, offering fast and optimized builds.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development with a focus on simplicity and performance.
- **Supabase**: An open-source Firebase alternative providing backend services such as authentication, real-time databases, and storage.
- **Prisma**: A next-generation ORM for Node.js and TypeScript that provides a type-safe database client and schema migrations.
- **Vitest**: A blazing-fast unit test framework powered by Vite, enabling quick and reliable testing.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins, used for processing styles in the project.

## Project Structure
```plaintext
VueAvonova/
│
├── .github/                   # GitHub workflows and actions
├── .vscode/                   # VSCode settings
├── node_modules/              # Node.js modules
├── prisma/                    # Prisma ORM files
├── public/                    # Public assets
├── src/                       # Source files
│   ├── assets/                # Static assets (images, fonts, etc.)
│   ├── components/            # Vue components
│   ├── lib/                   # Utility functions and libraries
│   ├── router/                # Vue Router configuration
│   ├── types/                 # TypeScript types
│   ├── views/                 # Vue views (pages)
│   ├── App.vue                # Root Vue component
│   └── main.ts                # Entry point for the application
├── .editorconfig              # Editor configuration
├── .env                       # Environment variables
├── .eslintrc.cjs              # ESLint configuration
├── .gitignore                 # Git ignore file
├── .prettierrc.json           # Prettier configuration
├── index.html                 # HTML template
├── package.json               # NPM package configuration
├── package-lock.json          # NPM package lock file
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.app.json          # TypeScript configuration for the app
├── tsconfig.json              # TypeScript configuration
├── tsconfig.node.json         # TypeScript configuration for Node.js
├── vite.config.ts             # Vite configuration
└── vitest.config.ts           # Vitest configuration

```

## Installation

To install the dependencies, run the following command:

```bash
npm install
```

### Usage
To start the development server, run:

```bash
npm run dev
```
This will start the application at http://localhost:3000.

### Development
During development, it is recommended to use VSCode with the following extensions:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
### Scripts
- npm run dev: Starts the development server.
- npm run build: Builds the application for production.
- npm run serve: Serves the built application.
- npm run lint: Lints the code using ESLint.
- npm run test: Runs the tests using Vitest.

### Build
To build the application for production, run:
```bash
npm run build
```
The built files will be in the dist directory.

### Testing
Test Coverage
Unit testing of code is done to ensure that the smaller pieces of code behave as expected, i.e., components, functions, etc.

- Isolation of Units: Testing units in isolation from other components helps in identifying and debugging failures more effectively. It also promotes modular design and improves maintainability.
- Clear Naming: Well-named tests convey their purpose and expected outcome, making it easier to understand their intent and identify failures.
- Assertion of Expected Behavior: Each test should include assertions that verify the expected behavior of the code being tested. These assertions define the criteria for passing or failing the test, including error messages, checking of conditions, and ensuring that props are being passed correctly.
### Requirements for Testing
- Check that all components are working and children nodes are rendering as expected.
- Ensure that all props and data are being passed correctly.
- Verify that all functions are working as expected.

To run the tests, use:
```bash
npm run vitetest
```
### Environment Variables
The project uses environment variables defined in the .env file. Ensure to set the necessary variables before running the application.

### Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.

### Onboarding New Developers

To ensure a smooth transition for new developers joining the project, here are some additional steps and resources:
1. Clone the Repository:
```bash
git clone https://github.com/your-username/VueAvonova.git
cd VueAvonova
```
2. Install Dependencies:
Ensure you have Node.js and npm installed. Then, run:
```bash
npm install
```
3. Set Up Environment Variables:
Create a .env file in the root directory and add the necessary environment variables as listed in .env.example.

4. Run the Application:
Start the development server to see the application in action:
```bash
npm run dev
```

6. Read the Documentation:
Familiarize yourself with the project structure and coding standards by reading this README.md file and other documentation available in the repository.


License
This project is licensed under the MIT License.



