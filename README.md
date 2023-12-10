 # Todo App
# Overview
This Todo App is a simple task management application that allows users to add, edit, and delete tasks. It includes features such as displaying a list of tasks, marking tasks as completed, editing task names, and filtering tasks based on completion status.

# Live Demo

Check out the live demo: [Todo App Live Demo](https://todo-three-olive.vercel.app/)

# Features
Display a list of existing tasks showing the task name and completion status.

Initialize the list with todos fetched from an API endpoint.

Add new tasks with input validation to ensure the task name is not empty.

Mark tasks as completed by clicking on them, with a visual distinction for completed tasks.

Edit task names by clicking on an edit button/icon next to each task.

Delete tasks using a delete button/icon.

Implement a filter or tab functionality to toggle between displaying all tasks and completed tasks.

# Tech Stack
React: JavaScript library for building user interfaces.

axios: Promise-based HTTP client for making API requests.

Tailwind CSS: Utility-first CSS framework for styling.

Material-UI Icons: Icon components for React applications.

@emotion/react, @emotion/styled: CSS-in-JS library for styling React components.

# Getting Started

# Prerequisites

Node.js and npm installed on your machine.

# Installation

Clone the repository:


git clone https://github.com/your-username/todo-app.git

Change into the project directory:


cd todo

# Install dependencies:


npm install

Running the App

Start the development server:


npm start

Open your browser and go to http://localhost:3000 to view the app.

# API Integration

The app fetches initial todos from the following API endpoint: https://jsonplaceholder.typicode.com/users/1/todos.
