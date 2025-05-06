# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Contact App

A modern and responsive contact management application built with React and Vite. This app allows users to add, edit, delete, search, and filter contacts with a smooth user experience, customizable themes, and engaging animations.

## Features

- **Add/Edit/Delete Contacts**: Easily manage your contact list with a user-friendly form.
- **Search & Filter**: Quickly find contacts by name or other criteria.
- **Custom Themes**: Switch between light, dark, and colorful themes with dynamic background animations.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Smooth Animations**: Includes fade-in, slide-in, and hover effects for a polished UI.
- **State Management**: Uses React Context API for efficient state management.

## Tech Stack

- **Frontend**: React 19.1.0, ReactDOM
- **Build Tool**: Vite 6.3.2
- **Styling**: CSS with custom animations
- **Linting**: ESLint with React Hooks and React Refresh plugins
- **Others**: Context API for state management

## Getting Started

### Prerequisites

- Node.js (>=18.0.0)
- npm or yarn



contact-app/
├── src/
│   ├── components/
│   │   ├── AddContactButton.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ContactList.jsx
│   │   ├── ContactMenu.jsx
│   │   ├── Modal.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ThemeSelector.jsx
│   │   ├── Toolbar.jsx
│   ├── context/
│   │   ├── ContactContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── animations.css
├── public/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
Available Scripts
npm run dev: Runs the app in development mode with hot module replacement.
npm run build: Builds the app for production.
npm run preview: Previews the production build locally.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.
License
This project is licensed under the MIT License.

Contact
For any questions or suggestions, feel free to reach out at hasannajafi7274@gmail.com.