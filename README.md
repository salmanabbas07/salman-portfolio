# Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, interactive components, and a professional design to showcase projects, skills, certifications, and more.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Built with Framer Motion for fluid, professional animations throughout the site
- **Interactive Components**: 
  - Skills network visualization with floating skill orbs
  - Project gallery with hover effects
  - Certificate showcase with modal preview
  - Contact form with EmailJS integration
- **Multiple Pages**: Home, About, Skills, Projects, Certificates, Resume, and Contact sections
- **Modern UI**: Dark theme with gradient accents and glassmorphism effects
- **Navigation**: Responsive navbar with mobile hamburger menu

## Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **React Router DOM 6.14.1** - Client-side routing
- **Framer Motion 10.12.6** - Animation library
- **Vite 5.0.0** - Build tool and dev server

### UI/Styling
- **CSS3** - Custom styling with CSS variables
- **Lucide React 0.552.0** - Icon library
- **React Icons 5.5.0** - Additional icon components

### Backend Integration
- **EmailJS Com 3.2.0** - Contact form email functionality
- **D3.js 7.9.0** - Data visualization library

### Development Tools
- **@vitejs/plugin-react 5.1.0** - React plugin for Vite

## Folder Structure

```
Demo/
├── public/                 # Static assets (images, PDFs, etc.)
├── src/
│   ├── components/        # Reusable components
│   │   └── Navbar/       # Navigation component
│   │       ├── Navbar.jsx
│   │       └── Navbar.css
│   ├── pages/            # Page components
│   │   ├── Home/         # Home page
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── About/        # About page
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Skills/       # Skills page
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── Projects/     # Projects page
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Certificates/ # Certificates page
│   │   │   ├── Certificates.jsx
│   │   │   └── Certificates.css
│   │   ├── Resume/       # Resume page
│   │   │   ├── Resume.jsx
│   │   │   └── Resume.css
│   │   ├── Contact/      # Contact page
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   └── NotFound/     # 404 page
│   │       └── NotFound.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── .env                  # Environment variables
├── index.html            # HTML template
├── package.json          # Project dependencies
├── vite.config.mjs       # Vite configuration
└── README.md            # Project documentation
```

## Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

## Run Locally

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build Command

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment Instructions

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the dist folder**
   - **Vercel**: Deploy directly from Git or drag the `dist` folder
   - **Netlify**: Drag and drop the `dist` folder
   - **GitHub Pages**: Use the `dist` folder as the publish directory
   - **Other hosting**: Upload the contents of the `dist` folder

3. **Preview production build locally**
   ```bash
   npm run preview
   ```

## Author

Portfolio Website - A personal project showcasing web development skills and projects.
