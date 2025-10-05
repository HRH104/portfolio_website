# Portfolio Website

A modern, responsive portfolio website built with React showcasing full-stack development skills.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Performance**: Optimized for fast loading and great user experience

## Technologies Used

- React 18
- CSS3 with modern features
- Font Awesome icons
- Google Fonts (Inter)
- Framer Motion for animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment to Netlify

### Method 1: Drag and Drop

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to Netlify's deploy area

### Method 2: Git Integration

1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.js` - Your name and title
- `src/components/About.js` - Your bio and stats
- `src/components/Skills.js` - Your skills and proficiency levels
- `src/components/Projects.js` - Your projects
- `src/components/Contact.js` - Your contact information
- `public/index.html` - Page title and meta description

### Styling

- Global styles: `src/styles/index.css`
- Component-specific styles: `src/styles/[ComponentName].css`

### Adding New Sections

1. Create a new component in `src/components/`
2. Create corresponding CSS file in `src/styles/`
3. Import and add to `src/App.js`

## Performance Tips

- Images are optimized with placeholder URLs - replace with your actual optimized images
- Consider lazy loading for images
- Use WebP format for better compression
- Minimize bundle size by removing unused dependencies

## License

This project is open source and available under the [MIT License](LICENSE).