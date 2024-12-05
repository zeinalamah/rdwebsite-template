# Zein Alamah - Personal Website

A professional portfolio and blog website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first approach with a fully responsive layout
- **Dynamic Navigation**: Dropdown menus and mobile-friendly navigation
- **Dark Theme**: Elegant dark theme with consistent color scheme
- **SEO Optimized**: Meta tags, JSON-LD, and structured data
- **Performance Optimized**: Lazy loading images and code splitting

### Content Features
- **Featured Work Section**: Showcases latest articles, projects, and publications
- **Blog System**: Full-featured blog with categories and search
- **Projects Portfolio**: Showcase of technical and research projects
- **Publications Section**: Academic and non-academic publications
- **Interactive Resume**: Detailed professional experience and skills

### User Experience
- **Reading Progress**: Visual indicator of reading progress
- **Back to Top**: Smooth scroll to top button
- **Social Sharing**: Share content on X (Twitter) and LinkedIn
- **Copy Link**: Easy link copying with toast notifications
- **Cookie Consent**: GDPR-compliant cookie consent system
- **Lazy Loading**: Images load only when they enter viewport
- **Animations**: Smooth page transitions and hover effects

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Routing**: React Router
- **Meta Tags**: React Helmet Async
- **Notifications**: Sonner
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── data/             # Data files (blog posts, projects, etc.)
├── utils/            # Utility functions
├── config/           # Configuration files
└── types/            # TypeScript type definitions
```

## 🔧 Adding Content

### Adding a Blog Post
1. Navigate to `src/data/blogPosts.ts`
2. Add a new object to the `blogPosts` array:
```typescript
{
  id: "unique-post-id",
  title: "Post Title",
  excerpt: "Brief description",
  date: "YYYY-MM-DD",
  category: "Category Name",
  image: "image-url",
  tags: ["tag1", "tag2"],
  content: "Full post content"
}
```

### Adding a Project
1. Navigate to `src/data/projects.ts`
2. Add a new object to the `projects` array:
```typescript
{
  id: "project-id",
  title: "Project Title",
  description: "Project description",
  technologies: ["tech1", "tech2"],
  image: "image-url",
  github?: "github-url",
  demo?: "demo-url",
  date: "YYYY-MM-DD",
  content: "Full project description"
}
```

### Adding a Publication
1. Navigate to `src/data/publications.ts`
2. Add a new object to the `publications` array:
```typescript
{
  id: "publication-id",
  title: "Publication Title",
  journal: "Journal Name",
  date: "YYYY-MM-DD",
  link: "publication-url",
  abstract: "Publication abstract",
  image: "image-url",
  type: "academic" | "non-academic",
  tags: ["tag1", "tag2"]
}
```

### Adding Skills
1. Navigate to `src/data/skills.ts`
2. Add to either `technicalSkills` or `businessSkills`:
```typescript
{
  name: "Skill Name",
  description: "Brief description",
  details: [
    "Detail 1",
    "Detail 2"
  ],
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert"
}
```

## 🎨 Customizing Styles

### Theme Colors
The main theme colors are defined in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#2B3187',
      background: '#0E0F1F',
      text: '#F7F8F8',
    },
  },
}
```

### Component Styles
- Components use Tailwind CSS classes
- Common styles are extracted into reusable classes
- Custom styles can be added in `src/index.css`

## 🔍 SEO Configuration

### Basic SEO
1. Navigate to `src/config/seo.ts`
2. Update the `siteConfig` object with your information:
```typescript
{
  title: "Site Title",
  description: "Site Description",
  siteUrl: "your-url",
  keywords: ["keyword1", "keyword2"],
  // ...other SEO settings
}
```

### Page-Specific SEO
Use the `SEO` component in any page:
```typescript
<SEO
  title="Page Title"
  description="Page Description"
  type="website|article"
  image="image-url"
  article={boolean}
  publishedTime="YYYY-MM-DD"
  tags={["tag1", "tag2"]}
/>
```

## 🚀 Deployment

### Build
```bash
npm run build
```

### Production Build Checks
- Verify meta tags and SEO settings
- Test social sharing functionality
- Check responsive design
- Validate all links and routes
- Test performance and loading times

## 🔒 Security

### Security Features
- Content Security Policy
- HTTPS enforcement
- XSS protection
- Security headers
- Cookie security
- Security.txt file

## 📈 Analytics

Google Analytics is implemented via `gtag.js`. The tracking ID can be updated in `index.html`.

## 🧪 Development

### Running Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Code Organization
- Keep components small and focused
- Use TypeScript for type safety
- Follow the established project structure
- Maintain consistent naming conventions

## 📝 License

All rights reserved. © 2024 Zein Alamah