# Uptune

**Uptune** is a collaborative music player app built using Next.js. It allows multiple users to vote on and play music tracks, making it an ideal solution for parties, clubs, and other social events. The app integrates YouTube for video playback, allowing users to easily search for and queue music videos, with the most-voted tracks played automatically.
## Video Demo

[![Uptune Video Demo](https://drive.google.com/file/d/1N35O6HmQYhkUh5tE9tXNNseuzKYN0D65/view?usp=drive_link)](https://drive.google.com/file/d/1DhOD_-2sElBtbkw7RLH3Y_PIn4wEMdIk/view?usp=drive_link)
## Features

- **Collaborative Music Queue**: Users can vote on music, and the most popular tracks are played in order.
- **YouTube Integration**: Search and play YouTube videos seamlessly within the app.
- **Real-time Updates**: Ensure the music playlist is always up-to-date with user votes.
- **Authentication**: Secure login with Google using NextAuth.
- **Notifications**: User-friendly notifications via React Toastify.

## Tech Stack

### Core Technologies

- **Next.js**: Fast and scalable React framework.
- **Prisma**: ORM for managing and interacting with the database.
- **NextAuth**: Authentication solution, supporting Google OAuth.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **YouTube APIs**: Fetch and play YouTube videos using `youtube-player` and `youtube-search-api`.

### Other Dependencies

- **Axios**: For making API requests.
- **Zod**: Schema validation for forms and data.
- **Radix UI**: For UI primitives, utilizing the `react-slot` component.
- **Lucide React**: Icons for UI elements.
- **Class Variance Authority**: Tailwind utility for component variance.

### Dev Tools

- **TypeScript**: Strong typing for better code management.
- **ESLint**: Linting for maintaining code quality.
- **PostCSS**: CSS post-processing for optimization.
- **Tailwind CSS Animate**: Custom animations for UI enhancements.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **Yarn** or **npm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/uptune.git
   cd uptune

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
