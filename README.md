# The Cards Emporium - Frontend Application

Welcome to the frontend application for The Cards Emporium, a marketplace for creating and trading cards. This project is built using [Next.js](https://nextjs.org/), a powerful React framework. It utilizes Wagmi for interacting with the blockchain and zustand for state management.

## Features

On the homepage, you'll find a list of all the cards available in the store from various users. To unlock additional features, log in with your Metamask Wallet by clicking the "Login with Metamask" button in the upper right corner.

Once logged in, you'll gain access to a new Profile section. Here, you can:

- **View Card Details**: Click on a card to view its details.
- **Add a Card**: Create a new card by specifying its name, description, and the URL of the card's image (please use HTTPS links).
- **Delete a Card**: You can delete any cards that you've created.
- **Like a Card**: Show your appreciation for a card by clicking on the heart icon. This will add it to your Liked cards list.

Please note that all image URLs should be HTTPS links.

## Getting Started

To get the development server running, follow these steps:

1. Install the project dependencies:

```bash
npm install
# or
yarn install
```
2. Start the development server:
```bash
npm run dev
```
Open http://localhost:3000 with your browser to see the result.