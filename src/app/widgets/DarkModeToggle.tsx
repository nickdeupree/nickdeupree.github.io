'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    // Wait until mounted to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) {
        return <button className="px-4 py-2 rounded bg-gray-300 text-black">Theme</button>;
    }

    return (
        <button 
            className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
    );
}