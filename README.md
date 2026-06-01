# 🚀 React Employee Profile Cards

A responsive React application that displays dynamic employee profile cards using reusable components, props, and array mapping.

## 📸 Preview

This project showcases a collection of employee profile cards with:

- Employee Image
- Name
- Role
- Company Name
- Hourly Rate
- Skills
- Profile Description
- Responsive Card Layout

## ✨ Features

- Built with React.js
- Reusable Components
- Dynamic Data Rendering
- Props Usage
- Array Mapping with `.map()`
- Responsive Flexbox Layout
- Modern Card UI Design
- Clean and Organized Code Structure

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- JSX
- CSS3
- Flexbox

## 📂 Project Structure

```bash
src/
│
├── components/
│   └── Profile.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

## 📚 React Concepts Used

### Components
The UI is divided into reusable Profile components.

### Props
Data is passed from App.jsx to Profile.jsx using props.

```jsx
<Profile
  employeeName={elem.name}
  employeeRole={elem.role}
  companyName={elem.company}
  payment={elem.pay}
  employeeSkills={elem.skills}
/>
```

### Array Mapping

Employee cards are rendered dynamically using:

```jsx
employees.map((employee) => {
  return <Profile />
})
```

### Conditional Styling

Skill badges use conditional classes:

```jsx
className={skill.startsWith("+") ? "additional" : ""}
```

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/ShubhXCode24/react-employee-profile-cards.git
```

### Navigate to Project Folder

```bash
cd react-employee-profile-cards
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

## 🎯 Learning Outcomes

Through this project, I practiced:

- React Components
- JSX
- Props
- Array Mapping
- Conditional Rendering
- Responsive Layout Design
- Component Reusability

## 🔮 Future Improvements

- Search Employees
- Filter by Skills
- Dark Mode
- Employee Details Modal
- API Integration
- Pagination
- Favorite Profiles Feature

## 👨‍💻 Author

**Shubham Suryavanshi**

Frontend Developer & React Learner

GitHub: https://github.com/ShubhXCode24

---

⭐ If you like this project, consider giving it a star!
