# GitHub Copilot Instructions

## Project Overview
This project is a static web application designed for training on French private security professional exams. It utilizes vanilla HTML, CSS, and JavaScript without any build tools or package managers.

## File Structure
- `index.html`: Main entry point of the application.
- `quiz.html`: Contains the quiz interface.
- `quiz.js`: JavaScript logic for handling quizzes.
- `style.css`: Styles for the application.
- `data/`: Directory containing quiz data files.
  - `quiz1.js`, `quiz2.js`, `quiz3.js`, `quiz4.js`: Individual quiz configurations.
  - `schema.js`: Defines the structure of quiz data.
- `js/`: Contains additional JavaScript files.
  - `firebase-config.js`: Configuration for Firebase integration.
- `live/`: Contains files for live interaction.
  - `join.html`, `student.html`, `teacher.html`: HTML files for different roles.
  - `live-common.js`, `student.js`, `teacher.js`: JavaScript files for handling live interactions.
  - `live-style.css`: Styles specific to live interactions.

## Developer Workflows
1. **Adding New Quizzes**: To add a new quiz, create a new JavaScript file in the `data/` directory following the structure defined in `schema.js`. Ensure to include all necessary questions and configurations.
2. **Running the Application**: Open `index.html` in a web browser to run the application locally.
3. **Testing**: Ensure to test quizzes thoroughly before deployment to ensure functionality and correctness.

## Integration Points
- **Firebase**: The project integrates with Firebase for backend services. Ensure to configure `firebase-config.js` with the correct credentials.

## Conventions
- Follow consistent naming conventions for files and variables to maintain clarity and organization within the codebase.
- Comment code adequately to explain complex logic and functionality.

## Additional Resources
- Refer to `CLAUDE.md` for more detailed project guidelines and architecture.
- Use the `README.md` for setup instructions and running the application.