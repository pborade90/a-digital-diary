
# A Digital Diary (Role-Based Access Control App)

A feature-rich blog website built with **React** and **React Router**, allowing users to read, write, and manage blogs. The website includes three roles:

1. **Reader**: Can browse and read blogs.
2. **Author**: Can create and manage their own blogs.
3. **Admin**: Can manage all users and blogs (delete functionality included).

## Live Demo

Check out the live demo of the app [here](https://adigitaldiary.netlify.app/).

## Screenshots

Check out the live demo of the app [here](https://drive.google.com/drive/folders/1OApDyFcJU3kDcPWBjYbuj_Tmmne78bh4?usp=drive_link).

## Features

- **Readers**: View and explore blogs created by authors.
- **Authors**: Create, edit, and delete their blogs.
- **Admins**: Manage users and delete inappropriate blogs.
- **Authentication**: Role-based access control using React Context API.
- **Responsive Design**: Fully responsive and visually appealing UI.

---

## Technologies Used

- **Frontend**: React
- **Routing**: React Router
- **State Management**: React Context API
- **Styling**: TailwindCSS
- **Storage**: LocalStorage (Shifting to another DB Service soon)

---

## Directory Structure

```plaintext
src/
├── assets/                 # Static assets (e.g., SVG icons)
│   ├── create-blog.svg
│   ├── discover-blog.svg
│   ├── icon.svg
│   ├── manage-blog.svg
├── components/             # Reusable components
│   ├── Admin/
│   │   ├── ProtectedRoutes.jsx   # Protect routes based on user roles
├── context/                # Context API for managing app-wide state
│   ├── AuthContext.jsx        # Manages authentication state and logic
├── pages/                  # All application pages
│   ├── About.jsx              # About the application
│   ├── AdminPage.jsx          # Admin dashboard
│   ├── AdminSignupPage.jsx    # Dedicated signup for admins
│   ├── BlogList.jsx           # List of blogs
│   ├── BlogPage.jsx           # Blog details and overview
│   ├── ContactUs.jsx          # Contact information
│   ├── CreateBlogPage.jsx     # Page to create new blogs
│   ├── Dashboard.jsx          # User dashboard
│   ├── LandingPage.jsx        # Home/landing page
│   ├── LoginPage.jsx          # Login page
│   ├── NotFound.jsx           # 404 error page
│   ├── SignupPage.jsx         # General signup page
│   ├── TermsPage.jsx          # Terms and conditions page
├── App.jsx                 # Main application entry point
├── index.css               # Global styles
├── main.jsx                # Application bootstrap file
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v16 or higher
- **npm**: v8 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the vite development server:
   ```bash
   npm run dev
   ```

---

## Usage

### User Roles

- **Reader**:
  - View blogs
  - No access to create or delete blogs
- **Author**:
  - Create blogs
  - Edit and delete their own blogs
- **Admin**:
  - Manage all blogs
  - Delete any user's blog
  - Manage users

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push the branch: `git push origin feature-name`.
5. Create a pull request.

---

## Acknowledgements

- Icons from [Heroicons](https://heroicons.com/)
- Design inspired by modern blogging platforms.

---
