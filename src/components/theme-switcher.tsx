import { useEffect, useState } from 'react';

// Main App component that includes the ThemeSwitcher
export default function ThemeSwitcher() {
  // State to manage the current theme: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or system preference
    // Check if a theme is already saved in localStorage
    // const savedTheme = localStorage.getItem('theme');
    // if (savedTheme) {
    //   return savedTheme;
    // }
    // If no theme is saved, check system preference for dark mode
    // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   return 'dark';
    // }
    // Default to 'light' if no preference is found
    return 'light';
  });

  // useEffect to apply the theme class to the document's root element (<html>)
  useEffect(() => {
    const root = document.documentElement;
    // Remove both classes first to ensure only the correct one is applied
    root.classList.remove('light', 'dark');
    // Add the current theme class
    root.classList.add(theme);
    // Save the current theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Re-run this effect whenever the 'theme' state changes

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // SVG for Sun icon
  const SunIcon = (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="M4.93 4.93l1.41 1.41"></path>
      <path d="M17.66 17.66l1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="M4.93 19.07l1.41-1.41"></path>
      <path d="M17.66 6.34l1.41-1.41"></path>
    </svg>
  );

  // SVG for Moon icon
  const MoonIcon = (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  );

  return (
    <button
      onClick={toggleTheme}
      className="p-3 mr-3 rounded-full bg-black text-white shadow-lg hover:bg-black-600 focus:outline-none dark:ring-2 focus:ring-black-300 dark:focus:ring-black-800 transition-all duration-300 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
}
