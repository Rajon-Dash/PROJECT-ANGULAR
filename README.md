# Angular Project

This is an Angular project built with Angular 14 and styled using Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Angular CLI](https://angular.io/cli) (version 14 or later)
- [Git](https://git-scm.com/)

## Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Rajon-Dash/PROJECT-ANGULAR.git
cd PROJECT-ANGULAR
```

## Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

## Install Tailwind CSS via npm

Install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

## Create the Tailwind Configuration Files

Generate the Tailwind configuration files:

```bash
npx tailwindcss init -p
```

## Configure Your `tailwind.config.js` File

Update your `tailwind.config.js` file as follows:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Add Tailwind Directives to Your `src/styles.css` File

Include the Tailwind directives in your `src/styles.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Run the Application

Finally, run the application using the following command:

```bash
ng serve
```

Now you can access your application at `http://localhost:4200/`.
```
