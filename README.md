# React To-Do List App with CRUD Functionality

A simple To-Do List application built using React, Vite, Styled Components, React Icons, and the useState hook. The app allows users to create, read, update, and delete tasks, along with the ability to switch between dark and light modes. The state of tasks is also persisted using local storage.

## Features

- Create, Read, Update, and Delete tasks (CRUD operations).
- Dark mode and light mode switching for a personalized experience.
- Local storage integration to save and load tasks between sessions.
- Completely Responsive website

## Demo

click here

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-todo-app
   ```

3. Install dependencies:

   ```bash
   npm i
   ```

   ```bash
   npm i styled-components
   ```

   ```bash
   npm i react-icons
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

1. Add a task: Type your task in the input field and press Enter.
2. Update a task: Click on the edit icon to edit it and press Enter to save changes.
3. Delete a task: Click on the delete icon next to the task.
4. Toggle task completion: Click on the checkbox next to the task.
5. Switch between dark mode and light mode: Click on the mode switch button.

## Technologies Used

- React
- Vite
- Styled Components
- React Icons
- useState Hook
- useEffect Hook

## Screenshots

Include some screenshots showcasing different views and features of your app.

## Local Storage Integration

Explain how you integrated local storage to persist the task data between sessions.

```javascript
useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
  }, [tasks]);
  // getting items stored for every refresh and rendering 
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks || []);
    
  }, []);
```

## Contributing

Contributions are welcome! If you find any issues, have suggestions for improvement, or are interested in helping implement the drag and drop feature, please feel free to create a pull request. For the drag and drop feature, you can follow these steps:

- Fork the repository.
- Create a new branch:
```bash
git checkout -b feature/drag-and-drop.
```
- Implement the drag and drop feature.
- Commit your changes:
```bash
git commit -m "Add drag and drop feature".
```
- Push to the branch:
```bash
git push origin feature/drag-and-drop.
```
- Open a pull request.

