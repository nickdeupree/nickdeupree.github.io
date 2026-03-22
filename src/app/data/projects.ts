export const projects = [
  {
    title: "Primary Source Verification & Extraction Agent",
    github: "https://github.com/nickdeupree/primary-source-verification-and-extraction-agent",
    description: "The PSEV Agent is an autonomous ReAct system that utilizes Google Search as a discovery engine to identify authoritative URLs, bypassing secondary summaries to find primary data sources. It then deploys a Webcrawler to perform deep-text extraction from those specific sites, ensuring all generated insights are grounded in real-time, verifiable information rather than model training data. The agent responds with a summary of its findings & a link to the source.",
    image: "/PSVEAgent.png",
    difficulty: 4,
    skills: ["TypeSCript", "Next.js", "LLM", "AI Agent Design"]
  },
  {
    title: "Prompt Vault",
    github: "https://github.com/nickdeupree/promptvault",
    link: "https://addons.mozilla.org/en-US/firefox/addon/prompt-vault/",
    description: "Prompt Vault is a Firefox extension that allows users to save and manage their favorite AI prompts directly in the browser. With a simple interface, users can quickly access their prompt library while browsing & inject prompts straight into their LLM chat interface. Built with JavaScript, it provides a seamless way to organize and utilize prompts for enhanced AI interactions.",
    image: "/PromptVault.png",
    difficulty: 2,
    skills: ["JavaScript"]
  },
    {
      title: "LLM Dictionary",
      github: "https://github.com/nickdeupree/llmdict",
      description: "A python desktop app using customtkinter, llama-cpp-python, Microsoft's Phi-3 model, and SQLite to create a local dictionary of words and their definitions. Users can add new words, view existing definitions, and search for specific entries. The app provides a simple interface for managing the dictionary and utilizes the LLM to generate accurate definitions based on user input, find synonyms, and learn about the words in their dictionary.",
      image: "/LLMDict.png",
      difficulty: 3,
      skills: ["Python", "LLM", "SQLite"]
    },
    {
      title: "12k Mastering XML to PDF",
      github: "https://github.com/nickdeupree/xmltopdf",
      description: "A React & TypeScript web app that converts xml cd and vinyl mastering notes into a clean, formatted PDF. It features a user-friendly interface for uploading XML files, customizable formatting options, and generates a professional PDF output for easy sharing and printing.",
      link: "https://nickdeupree.github.io/xmltopdf",
      image: "/XMLtoPDF.png",
      difficulty: 2,
      skills: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Lexicon",
      github: "https://github.com/nickdeupree/lexicon",
      link: "https://nickdeupree.github.io/lexicon",
      description: "Lexicon is a modern web application that enhances your reading experience through Rapid Serial Visual Presentation (RSVP) for speed reading and natural text-to-speech capabilities. Built with React 19, TypeScript, and Tailwind CSS, it offers a fully responsive PWA with adjustable reading speeds, multiple voice options, and an accessible dark mode interface.",
      image: "/Lexicon.png",
      difficulty: 2,
      skills: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Multiplayer DSA coding problem-solving platform",
      github: "https://nickdeupree.github.io/multiplayer-leetcode",
      description: "A real-time multiplayer coding platform for practicing data structures and algorithms. Built with React, Node.js, Yjs, Java, & Python it allows users to solve coding problems together in the same editor.",
      image: "/MultiplayerLeetCode.png",
      difficulty: 4,
      skills: ["TypeScript", "Java", "Python", "React", "Websocket", "Springboot"]
    },
    {
      title: "Conversational Reply Generator",
      github: "https://github.com/nickdeupree/OnlyBots",
      link: "https://only-bots.vercel.app/",
      description: "A web app that generates conversational replies using DeepSeek R1 through Open Router. Built with Next.js and Tailwind CSS, it offers a sleek interface for users to create funny & ironic responses.",
      image: "/OnlyBots.png",
      difficulty: 3,
      skills: ["Next.js", "Tailwind CSS", "Open Router", "LLM"]
    },  
    {
      title: "Folders2CSV",
      github: "https://github.com/nickdeupree/Folders2CSV",
      download: "https://github.com/nickdeupree/Folders2CSV/releases/download/2.0/Folders2CSV.zip",
      description: "Built for 12k Mastering, this Python Tkinter app scans the mastering folder on external backup drives. It generates a CSV listing each subfolder along with its drive name.",
      difficulty: 2,
      skills: ["Python"]
    },
    {
      title: "Audio Tag Editor",
      github: "https://github.com/nickdeupree/Audio-Tag-Editor/tree/main",
      download: "https://github.com/nickdeupree/Audio-Tag-Editor/releases/tag/0.1",
      description: "Audio Tag Editor — A minimal Python tool to update song metadata like title, artist, album, genre, and cover art using Mutagen. Simple UI with Tkinter. Supports MP3, FLAC, OGG, and more. Ideal for handling your local files.",
      image: "/AudioTagEdita.png",
      difficulty: 2,
      skills: ["Python"]
    },
    {
      title: "Erase Trail",
      github: "https://github.com/nickdeupree/EraseTrail",
      link: "https://addons.mozilla.org/en-US/firefox/addon/erasetrail/",
      description: "EraseTrail is a Firefox extension that automatically deletes browsing history entries for specific websites, helping you stay private and focused without sacrificing usability.",
      image: "/EraseTrail.png",
      difficulty: 3,
      skills: ["JavaScript"]
    },
    {
      title: "Background Audio Noise Suppression",
      github: "https://github.com/nickdeupree/NoiseSuppression",
      description: "A web application that leverages machine learning to remove background noise from audio files.",
      image: "/NoiseSuppression.png",
      difficulty: 4,
      skills: ["Python", "Machine Learning"]
    },
    {
      title: "Bird Watcher",
      github: "https://github.com/nickdeupree/Bird-Watching",
      description: "Developer in a team of 4. Built a bird-watching platform with user authentication & submission features using Py4Web, SQLite and Google Maps API. Designed and implemented the data visualization page, featuring temporal species sighting graphs, contributor leaderboards, and a filtered list of all bird species in a selected area.",
      image: "/BirdWatcha.png",
      difficulty: 4,
      skills: ["Python", "Py4Web", "SQLite"]
    },
    {
      title: "Datum",
      github: "https://github.com/jchung-48/datum",
      description: "Developed a full-stack AI-powered knowledge base web app for supply chain companies using Next.js & Firebase. We also integrated a self-hosted LLM via Firebase Genkit for RAG-based document retrieval, improving search efficiency.",
      image: "/Datum.png",
      difficulty: 5,
      skills: ["Next.js", "Firebase", "LLM"]
    },
    {
      title: "Daily Checklist",
      github: "https://github.com/nickdeupree/DailyChecklist",
      link: "https://nickdeupree.github.io/DailyChecklist",
      description: "A Progressive Web App designed to help users manage their daily tasks with a simple checklist. Users can add tasks, mark them as completed, and reset the list each day. The app is installable on mobile and desktop devices, providing quick access to daily task management anytime, even offline.",
      image: "/DailyChecklist.png",
      difficulty: 1,
      skills: ["PWA", "JavaScript"]
    },
    {
      title: "Password Generator",
      github: "https://github.com/nickdeupree/PasswordGenerator",
      link: "https://nickdeupree.github.io/PasswordGenerator",
      description: "A Progressive Web App designed to help users generate strong and customizable passwords. Users can set the length of their password, select character options (uppercase letters, numbers, special characters), and instantly copy the generated password for easy use. The app is installable on mobile and desktop devices, providing quick access for secure password generation anytime, even offline.",
      image: "/PasswordGenerata.png",
      difficulty: 1,
      skills: ["PWA", "JavaScript"]
    },
    {
      title: "Water Tracker",
      github: "https://github.com/nickdeupree/WaterTracker",
      link: "https://nickdeupree.github.io/WaterTracker/",
      description: "A Progressive Web App designed to help users track their daily water intake. Users can set a daily goal, record the amount of water they drink throughout the day, and visually monitor their progress with a realistic water animation. The app resets daily to encourage consistent hydration habits.",
      image: "/WaterTracka.png",
      difficulty: 1,
      skills: ["PWA", "JavaScript"]
    },
    {
      title: "PyGame Retro Arcade",
      github: "https://github.com/nickdeupree/PyGameArcade",
      description: "A retro-style arcade built with Pygame featuring Snake, Pong, Asteroids, Space Invaders, and more. Developed entirely using OpenAI's o1 and 4o models to improve AI prompting skills.",
      image: "/PyGameArcade.png",
      difficulty: 2,
      skills: ["Python", "Pygame"]
    },
    {
      title: "Prompt Masters",
      github: "https://github.com/nicholasdeupree/PromptMasters",
      link: "https://promptmasters.onrender.com/",
      description: "PromptMasters is a multiplayer AI image-generation game where players create images from prompts and vote on the best ones. Compete across several rounds, earning points for each vote. The player with the highest score wins! Built with Node.js and Socket.io for real-time play. Fun, creative, and competitive!",
      image: "/PromptMasters.png",
      difficulty: 4,
      skills: ["JavaScript", "Socket.io", "LLM"]
    },
    {
      title: "YouTube Music & Spotify Converter",
      github: "https://github.com/nicholasdeupree/ytmusic_to_spotify",
      description: "A Python-based tool that converts playlists between YouTube Music and Spotify, making it easy to transfer your favorite music.",
      image: "/MusicConverta.png",
      difficulty: 2,
      skills: ["Python"]
    },
    {
      title: "Minesweeper for MacOS",
      github: "https://github.com/nicholasdeupree/Minesweeper",
      download: "https://github.com/nickdeupree/Minesweeper/releases/tag/Release1.0",
      description: "A classic Minesweeper game reimagined for MacOS, built with Swift and optimized for a smooth user experience.",
      image: "/Minesweepa.png",
      difficulty: 2,
      skills: ["Swift", "macOS"]
    },
    {
      title: "CS2 Inventory Builder",
      github: "https://github.com/nicholasdeupree/csgo-inventory-builder",
      description: "A tool for creating and managing Counter-Strike 2 inventories, allowing users to experiment with different weapon skin combinations.",
      image: "/InvBuilda.png",
      difficulty: 3,
      skills: ["JavaScript", "React"]
    },
    {
      title: "Personal Finance Tracker",
      github: "https://github.com/nicholasdeupree/BankAccount",
      description: "A Python application for tracking personal finances, including income, expenses, and savings goals.",
      image: "/BankAccount.png",
      difficulty: 2,
      skills: ["Python"]
    },
    {
      title: "Minecraft Server Plugins",
      github: "https://github.com/nicholasdeupree/Minecraft-Plugins",
      description: "A collection of custom Minecraft server plugins that add new features and enhance gameplay experiences.",
      image: "/MinecraftPlugins.png",
      difficulty: 2,
      skills: ["Java"]
    },
    {
      title: "Steel Mod for Minecraft",
      github: "https://github.com/nicholasdeupree/Minecraft-Mods",
      description: "A Minecraft mod that introduces steel as a new material, along with related crafting recipes and game mechanics.",
      image: "/MinecraftMod.jpg",
      difficulty: 2,
      skills: ["Java"]
    }
  ]