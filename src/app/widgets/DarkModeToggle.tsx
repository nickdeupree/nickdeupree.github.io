'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function DarkModeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    // Wait until mounted to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Always render the same structure to avoid hydration mismatch
    const currentTheme = mounted ? (resolvedTheme || theme) : 'light';
    const isDark = currentTheme === 'dark';

    return (
        <Tooltip title={mounted ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle theme'}>
            <IconButton 
                color="inherit"
                onClick={() => mounted && setTheme(isDark ? 'light' : 'dark')}
                disabled={!mounted}
            >
                {isDark ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
        </Tooltip>
    );
}