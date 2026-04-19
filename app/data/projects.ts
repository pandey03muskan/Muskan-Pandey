export type Project = {
  id: string
  title: string
  type: 'personal' | 'work'
  description: string
  techStack: string[]
  features?: string[]
  challenges?: string[]
  learnings?: string[]
  liveUrl?: string
  codeUrl?: string
}

// export const projects: Project[] = [
//   {
//     id: 'what-did-my-code-do',
//     title: 'WhatDidMyCodeDo',
//     type: 'personal',
//     description:
//       'An interactive React learning platform that visualizes component rendering behavior in real time, helping developers understand performance optimization techniques.',
//     techStack: ['Next.js', 'React 19', 'TypeScript', 'Material UI'],
//     features: [
//       'Interactive playgrounds for React.memo, useCallback, and useMemo',
//       'Live render count tracking for performance visualization',
//       'Three-panel layout (code editor, UI preview, performance stats)',
//       'Dynamic code highlighting with toggle-based experimentation',
//       'Light/Dark mode with localStorage persistence',
//     ],
//     challenges: [
//       'Accurately tracking and displaying component re-renders in real time',
//       'Designing an intuitive UI for learning complex React concepts',
//     ],
//     learnings: [
//       'Deep understanding of React rendering behavior and optimization hooks',
//       'State management patterns for interactive developer tools',
//     ],
//     liveUrl: 'https://what-did-my-code-do.vercel.app/',
//     codeUrl: 'https://github.com/pandey03muskan',
//   },

//   {
//     id: 'zaika-zunction',
//     title: 'Zaika Zunction',
//     type: 'personal',
//     description:
//       'A full-stack social platform for sharing and discovering recipes, featuring real-time chat, user authentication, and interactive dashboards.',
//     techStack: ['Next.js', 'Node.js', 'MongoDB', 'WebSockets'],
//     features: [
//       'User authentication and profile management',
//       'Recipe sharing and social interaction features',
//       'Real-time chat using WebSocket-based architecture',
//       'Responsive dashboard for managing content',
//     ],
//     challenges: [
//       'Managing real-time communication with WebSockets',
//       'Designing scalable REST APIs for user and content management',
//     ],
//     learnings: [
//       'Full-stack application architecture and API design',
//       'Handling real-time data flow and synchronization',
//     ],
//     codeUrl: 'https://github.com/pandey03muskan',
//   },

//   {
//     id: 'rag-knowledge-assistant',
//     title: 'RAG Knowledge Assistant',
//     type: 'work',
//     description:
//       'An AI-powered knowledge assistant that retrieves and generates context-aware responses from multiple data sources using RAG workflows.',
//     techStack: ['Next.js', 'Material UI', 'Golang', 'RAG', 'REST APIs', 'Qdrant DB'],
//     features: [
//       'Chat-based interface with conversation history',
//       'Multi-source context selector (Local, Zendesk, Jira)',
//       'Streaming response rendering for AI-generated answers',
//       'Responsive layout with collapsible source panel',
//     ],
//     challenges: [
//       'Managing streaming state and partial renders in the chat UI',
//       'Designing an intuitive interface for complex multi-source queries',
//     ],
//     learnings: [
//       'Streaming API consumption and incremental UI updates',
//       'Building responsive, data-dense interfaces with Material UI',
//     ],
//     codeUrl: 'https://github.com/pandey03muskan',
//   },

//   {
//     id: 'golang-cli-tool',
//     title: 'Platform CLI Tool',
//     type: 'work',
//     description:
//       'A command-line tool built using Golang and Cobra CLI to manage platform workflows, authentication, workspaces, and AI endpoints.',
//     techStack: ['Golang', 'Cobra CLI', 'REST APIs'],
//     features: [
//       'Authentication and token management via CLI',
//       'Workspace and resource management commands',
//       'Integration with platform APIs for AI endpoint control',
//     ],
//     challenges: [
//       'Designing intuitive CLI command structure',
//       'Handling authentication flows without browser-based UI',
//     ],
//     learnings: [
//       'CLI design patterns and command structuring',
//       'API integration and token-based authentication handling',
//     ],
//     codeUrl: 'https://github.com/pandey03muskan',
//   },
// ]


export const projects: Project[] = [
  {
    id: 'what-did-my-code-do',
    title: 'WhatDidMyCodeDo',
    type: 'personal',
    description:
      'An interactive React learning platform that visualizes component rendering behavior in real time, helping developers understand performance optimization techniques.',
    techStack: ['Next.js', 'React 19', 'TypeScript', 'Material UI'],
    features: [
      'Interactive playgrounds for React.memo, useCallback, and useMemo',
      'Live render count tracking for performance visualization',
      'Three-panel layout (code editor, UI preview, performance stats)',
      'Dynamic code highlighting with toggle-based experimentation',
      'Light/Dark mode with localStorage persistence',
    ],
    challenges: [
      'Accurately tracking and displaying component re-renders in real time',
      'Designing an intuitive UI for learning complex React concepts',
    ],
    learnings: [
      'Deep understanding of React rendering behavior and optimization hooks',
      'State management patterns for interactive developer tools',
    ],
    liveUrl: 'https://what-did-my-code-do.vercel.app/',
    codeUrl: 'https://github.com/pandey03muskan',
  },

  // {
  //   id: 'zaika-zunction',
  //   title: 'Zaika Zunction',
  //   type: 'personal',
  //   description:
  //     'A full-stack social platform for sharing and discovering recipes, featuring real-time chat, user authentication, and interactive dashboards.',
  //   techStack: ['Next.js', 'Node.js', 'MongoDB', 'WebSockets'],
  //   features: [
  //     'User authentication and profile management',
  //     'Recipe sharing and social interaction features',
  //     'Real-time chat using WebSocket-based architecture',
  //     'Responsive dashboard for managing content',
  //   ],
  //   challenges: [
  //     'Managing real-time communication with WebSockets',
  //     'Designing scalable REST APIs for user and content management',
  //   ],
  //   learnings: [
  //     'Full-stack application architecture and API design',
  //     'Handling real-time data flow and synchronization',
  //   ],
  //   codeUrl: 'https://github.com/pandey03muskan',
  // },

  // 🔽 NEW PROJECTS

  {
    id: 'audiobook',
    title: 'AudioBook',
    type: 'personal',
    description:
      'A desktop-based text-to-speech application that converts PDF documents into spoken audio using Python libraries.',
    techStack: ['Python', 'Tkinter', 'pyPDF2', 'pyttsx3'],
    features: [
      'Upload PDF files and convert text into speech',
      'Simple GUI built using Tkinter',
      'Offline text-to-speech processing',
    ],
    challenges: [
      'Extracting clean text from PDFs with varying formats',
      'Managing smooth speech output for long documents',
    ],
    learnings: [
      'Working with Python GUI frameworks',
      'Text extraction and speech synthesis fundamentals',
    ],
    codeUrl: 'https://github.com/pandey03muskan/AudioBook'
  },

  {
    id: 'colors-playground',
    title: 'Colors Playground',
    type: 'personal',
    description:
      'A fun frontend project to explore DOM manipulation by generating random colors and CSS gradients interactively.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Generate random RGB colors dynamically',
      'Create custom gradients from user input',
      'Copy CSS gradient code to clipboard',
    ],
    challenges: [
      'Handling dynamic DOM updates efficiently',
      'Ensuring correct gradient generation logic',
    ],
    learnings: [
      'Core DOM manipulation concepts',
      'Improving JavaScript event handling skills',
    ],
    liveUrl: 'https://pandey03muskan.github.io/PlayWithColors/',
    codeUrl: 'https://github.com/pandey03muskan/Colors_PalyGround',
  },

  {
    id: 'simon-says',
    title: 'Simon Says',
    type: 'personal',
    description:
      'A beginner-friendly interactive game focused on color patterns and memory, built using core web technologies.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Color pattern generation and user interaction',
      'Progressive difficulty levels',
      'Visual feedback for correct/incorrect inputs',
    ],
    challenges: [
      'Managing game state and user input validation',
      'Designing smooth interaction flow',
    ],
    learnings: [
      'Event-driven programming in JavaScript',
      'Building interactive UI logic from scratch',
    ],
    liveUrl: 'https://pandey03muskan.github.io/SimonGame/',
    codeUrl: 'https://github.com/pandey03muskan/SimonSays-Game',
  },

    {
    id: 'rag-knowledge-assistant',
    title: 'RAG Knowledge Assistant',
    type: 'work',
    description:
      'An AI-powered knowledge assistant that retrieves and generates context-aware responses from multiple data sources using RAG workflows.',
    techStack: ['Next.js', 'Material UI', 'Golang', 'RAG', 'REST APIs', 'Qdrant DB'],
    features: [
      'Chat-based interface with conversation history',
      'Multi-source context selector (Local, Zendesk, Jira)',
      'Streaming response rendering for AI-generated answers',
      'Responsive layout with collapsible source panel',
    ],
    challenges: [
      'Managing streaming state and partial renders in the chat UI',
      'Designing an intuitive interface for complex multi-source queries',
    ],
    learnings: [
      'Streaming API consumption and incremental UI updates',
      'Building responsive, data-dense interfaces with Material UI',
    ],
    codeUrl: 'https://github.com/pandey03muskan',
  },

  {
    id: 'golang-cli-tool',
    title: 'Platform CLI Tool',
    type: 'work',
    description:
      'A command-line tool built using Golang and Cobra CLI to manage platform workflows, authentication, workspaces, and AI endpoints.',
    techStack: ['Golang', 'Cobra CLI', 'REST APIs'],
    features: [
      'Authentication and token management via CLI',
      'Workspace and resource management commands',
      'Integration with platform APIs for AI endpoint control',
    ],
    challenges: [
      'Designing intuitive CLI command structure',
      'Handling authentication flows without browser-based UI',
    ],
    learnings: [
      'CLI design patterns and command structuring',
      'API integration and token-based authentication handling',
    ],
    codeUrl: 'https://github.com/pandey03muskan',
  },
]