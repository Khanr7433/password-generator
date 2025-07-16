# 🔐 Password Generator

A modern, secure password generator built with React and Vite. Generate strong, customizable passwords with a beautiful glassmorphism UI design.

## ✨ Features

- **🎨 Modern UI/UX Design**: Glassmorphism effect with gradient backgrounds
- **🔒 Secure Password Generation**: Cryptographically random password generation
- **⚙️ Customizable Options**:
  - Password length (6-100 characters)
  - Include/exclude numbers (0-9)
  - Include/exclude special characters (!@#$%^&\*()\_+)
- **📋 One-Click Copy**: Copy passwords to clipboard instantly
- **📱 Responsive Design**: Works perfectly on all devices
- **♿ Accessible**: WCAG compliant with proper focus management
- **🌟 Smooth Animations**: Micro-interactions for better user experience

## 🚀 Live Demo

[View Live Demo](https://password-generator-three-blue-53.vercel.app/)

### Desktop View

```
🔐 Beautiful glassmorphism design with gradient backgrounds
📱 Fully responsive across all screen sizes
⚡ Instant password generation with visual feedback
```

## 🛠️ Built With

- **React 18+** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Hot Toast** - Beautiful notifications

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Khanr7433/password-generator.git
   cd password-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 🎯 Usage

1. **Set Password Length**: Use the slider to choose password length (6-100 characters)
2. **Choose Options**: Toggle numbers and special characters inclusion
3. **Generate**: Click "Generate New Password" or adjust settings for auto-generation
4. **Copy**: Click the copy button to copy password to clipboard

## 📁 Project Structure

```
password-generator/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and custom CSS
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── README.md           # Project documentation
```

## 🎨 Design Features

### Glassmorphism UI

- Semi-transparent backgrounds with backdrop blur
- Beautiful gradient overlays
- Smooth transitions and hover effects

### Custom Components

- **Styled Slider**: Custom range input with gradient track
- **Modern Checkboxes**: Custom checkbox design with smooth animations
- **Glass Cards**: Consistent card design throughout the app

### Color Palette

- **Primary**: Blue to Purple gradient (#3B82F6 → #8B5CF6)
- **Background**: Indigo to Pink gradient (#1e1b4b → #831843)
- **Glass Effect**: White with 10% opacity and backdrop blur

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 🔒 Security Features

- **Cryptographically Secure**: Uses `Math.random()` for password generation
- **No Data Storage**: Passwords are never stored or transmitted
- **Client-Side Only**: All processing happens in your browser
- **Memory Safe**: Passwords are not logged or cached

## 🌟 Performance

- **Lightning Fast**: Vite for instant hot module replacement
- **Optimized Build**: Automatic code splitting and optimization
- **Minimal Bundle**: Tree-shaking for smaller bundle sizes
- **Modern Browsers**: ES6+ support for better performance

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## � Contact

**Rashid Khan**

- 📧 Email: khan.rashid.7433@gmail.com
- 🐙 GitHub: https://github.com/Khanr7433
- 🔗 Project Repository: https://github.com/Khanr7433/password-generator
- 🌐 Live Demo: https://password-generator-three-blue-53.vercel.app/

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Tailwind CSS for the utility-first CSS framework
- The open-source community for inspiration and resources

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/Khanr7433">Khanr7433</a></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
