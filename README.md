# Gallery app with react

This app lets the user display several images (currently 24) on a page. The image data is fetched from the Flickr API each time the user requests pictures with different tags. The routes change depending on the chosen tag(s) so that it's possible to navigate via the browsers back / forward buttons.

### Main mechanics and functionality
- The page is basically split into 3 routes: the main route (which actually redirects to the search route with a default query), the dynamic search route with a query-parameter and a 404-error route. All routes are set up in the App-component. The app component also manages the data of the requested images in it's state
- To search for images the user can either click on of the topics in the NavBar or type a search term into the form input of the SearchForm component
- If the search returns no results, an informative message is displayed
- The user can also navigate through the visited routes via the browsers nav buttons

### Styling

- I chose a sticky header with a contrasting bg-color (compared to the gallery) and placed the navigation elements inside
- If a user hovers over an image it gets scaled up and shown in full resolution


### Usage
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Credits
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It also uses the React Router library(https://reacttraining.com/react-router/) for setting up the different routes and axios (https://github.com/axios/axios) for handling the fetch requests.
