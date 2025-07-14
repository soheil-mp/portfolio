# Quantitative Investment Blog

A modern, minimal React-based blog focused on quantitative investment strategies and financial analysis algorithms.

## 🚀 Features

- **Minimal Design**: Clean, professional interface with focus on content
- **Synchronized Content**: Blog names and image files perfectly aligned
- **React Architecture**: Modern single-page application with routing
- **Responsive Design**: Works beautifully on all devices
- **Educational Content**: In-depth analysis of quantitative investment methods

## 📊 Trading Strategies Covered

- **Momentum Trading**: Statistical analysis and machine learning techniques
- **Portfolio Theory**: Modern portfolio optimization methods
- **Breakout Systems**: Statistical analysis for high-probability trades
- **Rainbow Algorithm**: Multi-timeframe technical analysis

## 🛠 Technology Stack

- **React 18**: Modern functional components with hooks
- **React Router**: Client-side routing for SPA navigation
- **CSS3**: Clean, minimal styling with modern typography
- **ES6+**: Modern JavaScript features

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quant-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
quant-blog/
├── public/
│   ├── assets/
│   │   └── images/           # Blog images and animations
│   └── index.html           # HTML template
├── src/
│   ├── components/
│   │   └── Layout.js        # Navigation and footer
│   ├── data/
│   │   └── blogData.js      # Blog posts and metadata
│   ├── pages/
│   │   ├── Home.js          # Homepage with strategy cards
│   │   ├── BlogList.js      # Blog listing page
│   │   └── BlogPost.js      # Individual blog post page
│   ├── App.js               # Main app component
│   ├── index.js             # React entry point
│   └── index.css            # Global styles
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🎯 Design Philosophy

- **Minimal**: Clean, distraction-free interface
- **Content-First**: Typography and readability prioritized
- **Synchronized**: Names, images, and content perfectly aligned
- **Professional**: Suitable for academic and professional use

## 📖 Content Management

Blog posts are managed through the `src/data/blogData.js` file. Each post includes:
- Title and slug (synchronized naming)
- Full content with markdown-style formatting
- Category and tags
- Image references (matching file names)
- Author and publication date

## 🎨 Styling

The blog uses a minimal color palette:
- **Background**: Light gray (#fafafa)
- **Text**: Dark gray (#2c3e50)
- **Headings**: Darker gray (#1a202c)
- **Accents**: Subtle grays (no blue!)
- **Typography**: Inter + Playfair Display

## 🔧 Customization

To add new blog posts:
1. Add post data to `src/data/blogData.js`
2. Add corresponding image to `public/assets/images/`
3. Ensure the image filename matches the post slug

## 📱 Responsive Design

The blog is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly navigation

## 🚀 Deployment

Build the production version:
```bash
npm run build
```

The `build` folder contains the optimized static files ready for deployment to any static hosting service.

---

**Author**: Soheil Mohammadpour  
**License**: MIT