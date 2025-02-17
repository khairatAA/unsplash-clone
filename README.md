# Unsplash Clone

This project is a mini clone of the Unsplash website, built using Vue.js, Axios, and SCSS, which interacts with the [Unsplash API](https://unsplash.com/developers) to fetch and display photos. The app implements features such as a staggered grid layout, image modals, and loading placeholders, while focusing on responsive design and a smooth user experience.

## Features

- **Landing Page**: Displays 7-8 latest "African" photos fetched from the Unsplash API.
- **Search Functionality**: Allows users to search for photos, showing results in a staggered grid.
- **Image Modal**: Clicking on an image opens a modal displaying the image in the highest resolution.
- **Loading Placeholders**: Show placeholders while images are being fetched from the API.
- **Responsive Design**: The layout adapts to various screen sizes using CSS Grid and media queries.

## Tools and Technologies Used

- **Vue.js**: JavaScript framework for building the app's user interface.
- **Axios**: Used for making API calls to the Unsplash API.
- **SCSS**: SASS syntax used to style the app, ensuring maintainable and modular styles.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/khairatAA/unsplash-clone.git
```

### 2. Install Dependencies

```cd unsplash-clone
npm install
# or
yarn install
```

### 3. Set Up the Unsplash API

```
To connect to the Unsplash API, you’ll need to create an account and generate an API key.

Go to Unsplash Developers and sign up.
Create a new application to get your Access Key.
```

### 4. Configure the API Key

```
In your project, create a .env file in the root directory and add your Unsplash Access Key:

VUE_APP_UNSPLASH_ACCESS_KEY=your-access-key-here
```

### 5.

Run the App

```
To run the app locally, use the following command:

npm run dev

This will start the local development server. Visit http://localhost:5173 in your browser to view the app.
```
