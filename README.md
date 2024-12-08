# Calculator App

## Task
https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f

## How to Run the App

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Rubical/test.git
   ```
2. Navigate to the project directory:
   ```bash
   cd test
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Build the application:
   ```bash
   npm run build
   ```
5. Open the `dist/index.html` file in your browser to view the app.

---


## Folder Structure

- **`src`**: Main source code directory:
    - **`js`**: Contains JavaScript files for application logic.
        - `calculator.js`: Implements the core functionality of the calculator.
        - `theme.js`: Manages theme feature.
    - **`styles`**: Includes all the CSS files.
        - `reset.css`: Resets default browser styles.
        - `styles.css`: Contains the app-specific styles.
      
    - **`index.html`**: The main HTML file for the app
    - **`index.js`**: The main JS file for the app.

---

### Root Configuration Files

These files are responsible for configuration settings in the project:

- **`.husky/`**\
  Contains configuration for Husky (used for managing git hooks).

- **`dist/`**\
  This folder is automatically generated after running the build. It contains the compiled and production-ready application files.

- **`node_modules/`**\
  Contains all the dependencies and libraries installed using npm.

- **`package.json`**\
  Main file containing metadata about the project and its dependencies.

- **`package-lock.json`**\
  Locks the versions of all dependencies installed via `npm install`.

- **`webpack.config.js`**\
  Webpack configuration file responsible for managing build and development server configurations.

- **`.gitignore`**\
  Specifies files and directories to ignore when committing to git.

- **`.prettierrc`** \
Configuration for Prettier code formatting.

- **`eslint.config.js`**\
  Configuration settings for ESLint, ensuring code quality.

