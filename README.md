# 🎓 Learn-Sphere

A modern, fully responsive **E-Learning Platform** built with pure HTML, Tailwind CSS, and Vanilla JavaScript. This project is designed for collaborative development with a clean, modular folder structure.

## 🚀 Features

- ✅ **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Frontend Only** - No backend required, perfect for learning and prototyping
- ✅ **Tailwind CSS** - Modern utility-first CSS framework
- ✅ **Modular Architecture** - Clean separation of concerns for team collaboration
- ✅ **Dynamic Components** - Reusable navbar, footer, and course cards
- ✅ **Interactive UI** - Image sliders, accordions, filters, and animations
- ✅ **Form Validation** - Client-side validation for login, register, and contact forms
- ✅ **Student Dashboard** - Mock dashboard with progress tracking
- ✅ **Course Management** - Browse, search, and filter courses

## 📁 Folder Structure

```
Learn-Sphere/
│
├── index.html                    # Home page
│
├── /pages                        # All pages
│   ├── about.html
│   ├── courses.html
│   ├── course-details.html
│   ├── login.html
│   ├── register.html
│   ├── contact.html
│   ├── dashboard.html
│   ├── faq.html
│   └── resources.html
│
├── /assets                       # Static assets
│   ├── /images
│   │   ├── /hero                 # Hero section images
│   │   ├── /courses              # Course thumbnails
│   │   ├── /instructors          # Instructor photos
│   │   └── /misc                 # Other images
│   ├── /icons                    # Icons/logos
│   └── /pdfs                     # Downloadable resources
│
├── /css
│   ├── global.css                # Custom CSS overrides
│   └── variables.css             # CSS variables for theming
│
├── /js
│   ├── /components               # Component-specific JS
│   │   ├── navbar.js
│   │   ├── slider.js
│   │   └── course-card.js
│   ├── /utils                    # Reusable utilities
│   │   ├── validation.js
│   │   ├── storage.js
│   │   └── helpers.js
│   ├── /pages                    # Page-specific logic
│   │   ├── dashboard.js
│   │   ├── courses.js
│   │   └── faq.js
│   ├── main.js                   # Global initialization
│   └── config.js                 # App configuration
│
├── /components                   # Reusable HTML components
│   ├── navbar.html
│   ├── footer.html
│   ├── course-card.html
│   └── sidebar.html
│
├── /data                         # Mock data (JSON)
│   ├── courses.json
│   ├── instructors.json
│   ├── faqs.json
│   └── testimonials.json
│
├── README.md
└── .gitignore
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** (CDN) - Utility-first styling
- **Vanilla JavaScript** - No frameworks, pure JS
- **LocalStorage** - Client-side data persistence

## 📦 Installation & Setup

### For Developers (First Time Setup)

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dinesh69069/LearnSphere.git
   cd Learn-Sphere
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install **exact same versions** from `package-lock.json`:
   - Tailwind CSS v3.4.17
   - PostCSS v8.5.6
   - Autoprefixer v10.4.22

3. **Build Tailwind CSS**
   ```bash
   npm run build
   ```

4. **Start development mode** (auto-rebuild on changes)
   ```bash
   npm run watch
   ```

5. **Open in browser**
   - Use a local server (required for proper file loading):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using VS Code Live Server extension
   Right-click on any HTML file → Open with Live Server
   ```

6. **Access your component**
   - Home: `http://localhost:8000/home/index.html`
   - About: `http://localhost:8000/about/index.html`
   - Courses: `http://localhost:8000/courses/index.html`
   - Dashboard: `http://localhost:8000/dashboard/index.html`
   - Login: `http://localhost:8000/login/index.html`
   - SignUp: `http://localhost:8000/signup/index.html`
   - Blog: `http://localhost:8000/blog/index.html`
   - Roadmap: `http://localhost:8000/roadmap/index.html`
   - Notes: `http://localhost:8000/notes/index.html`

### ⚠️ Important for Collaboration

- ✅ **DO commit**: `package.json`, `package-lock.json`, `tailwind.config.js`, `src/input.css`
- ❌ **DON'T commit**: `node_modules/`, `dist/output.css` (auto-generated)
- 🔄 **Always run** `npm install` after pulling new changes
- 🔄 **Always run** `npm run build` before testing your work

## 👥 Collaboration Guidelines

### Developer Assignment

| Developer | Pages | Responsibilities |
|-----------|-------|------------------|
| **Dev 1** | Home, About, Contact | Hero slider, about sections, contact form |
| **Dev 2** | Courses, Course Details | Course grid, filters, search, course data |
| **Dev 3** | Login, Register | Auth forms, validation logic |
| **Dev 4** | Dashboard, FAQ, Resources | Dashboard UI, FAQ accordion, resources |
| **All** | Shared Components | Navbar, footer, utilities |

### Git Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes and commit**
   ```bash
   git add .
   git commit -m "Add: feature description"
   ```

3. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Coding Standards

- ✅ Use **Tailwind utility classes** for all styling
- ✅ Keep custom CSS to a minimum (only in `global.css`)
- ✅ Use **semantic HTML5** elements
- ✅ Add **comments** to complex JavaScript logic
- ✅ Follow **consistent naming conventions**
  - Files: `kebab-case.js`
  - Functions: `camelCase()`
  - Classes: `PascalCase`
- ✅ Test responsiveness on mobile, tablet, desktop

## 🎨 Pages Overview

### 1. **Home Page** (`index.html`)
- Hero section with CTA buttons
- Featured courses carousel
- Testimonials section
- Statistics/achievements

### 2. **Courses Page** (`pages/courses.html`)
- All courses in grid layout
- Category filter
- Search functionality
- Pagination

### 3. **Course Details** (`pages/course-details.html`)
- Course banner and overview
- Curriculum/modules
- Instructor information
- Enroll button

### 4. **Login/Register** (`pages/login.html`, `pages/register.html`)
- Clean authentication forms
- Client-side validation
- Password strength indicator

### 5. **Dashboard** (`pages/dashboard.html`)
- Sidebar navigation
- Progress cards
- Enrolled courses
- User profile

### 6. **About Us** (`pages/about.html`)
- Mission and vision
- Team/instructors
- Company history

### 7. **Contact** (`pages/contact.html`)
- Contact form with validation
- Location map placeholder
- Social media links

### 8. **FAQ** (`pages/faq.html`)
- Accordion-style Q&A
- Smooth animations

### 9. **Resources** (`pages/resources.html`)
- Downloadable materials
- Study guides
- PDF links

## ⚡ Key Features Implementation

### Image Slider
- Auto-play with manual controls
- Smooth transitions
- Responsive design

### Form Validation
- Email format check
- Password strength validation
- Real-time error messages
- Empty field prevention

### Course Filtering
- Filter by category
- Search by keyword
- Dynamic UI updates

### Dashboard Features
- Sidebar toggle
- Progress tracking
- Mock enrolled courses
- Profile management

## 🎯 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement course ratings
- [ ] Add video player component
- [ ] Create quiz/assessment pages
- [ ] Add certificate generation
- [ ] Integrate analytics

## 🐛 Known Issues

- None at the moment

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Contributors

- Your Name - Initial work

## 📧 Contact

For questions or feedback, reach out at: your-email@example.com

---

**Built with ❤️ using HTML, Tailwind CSS, and Vanilla JavaScript**
