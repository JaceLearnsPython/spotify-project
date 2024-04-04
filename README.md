# Lab 7 -- React II: More cool stuff

The goals with this lab are as follows:

1. Continue practicing your React skills
1. Work with a component library -- we will be using Ant Design (`antd` node module) by Alibaba

## 1. Getting Started

For this lab, you will create a brand new repository called `spotify-project`. 

Like before, you will build your React app from scratch, which will involve:
1. Creating a `package.json` at the root of your `spotify-project` directory.
    * Hint: `npm init`
2. Installing the following 4 packages: `react`, `react-dom`, `vite`, and `antd`.
    * Hint: `npm install`
3. Creating the following 5 base files: `index.html`, `styles.css`,  `main.jsx`, `App.jsx`, and `.gitignore`

## 2. Setting up your files
Please add the following starter code to your files:

### index.html
Paste the following code in `index.html`:
```html
<!doctype html>
<html>
  <head>
    <title>Spotify Practice</title>
    <link rel="stylesheet" href="styles.css" />
    <!-- link to React module -->
    <script type="module" src="./main.jsx" type="text/javascript" defer></script>
  </head>

  <body>
    <div id="app" />
  </body>
</html>
```

### styles.css
Paste the following code in `styles.css` (simple formatting to start you off):

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}

header {
    border-bottom: solid 2px;
    height: 100px;
    display: flex;
    justify-content: center;
}

main {
    max-width: 1100px;
    margin: auto;
    padding: 30px;
}
```

### App.jsx
Paste the following code in `App.jsx` (sets up an HTML skeleton that you will later be enhancing):

```javascript
import React from "react";

export default function App() {
            
    return (
        <>
            <header>
                <h1>Spotify Demo</h1>
            </header>
            <main>
                <p>Hello React!</p>
            </main>
        </>
    );
}
```

### main.jsx
Paste the following code in `main.jsx` (imports your `App.jsx` component and renders it inside of `<div id="app" />`):

```javascript
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function main() {
    const rootEl = document.getElementById("app");
    const root = createRoot(rootEl);
    root.render(<App />);
}

main();
```

### package.json
Configure your package.json file to use the vite bundler (recall that you already installed vite via npm) by making the following edits to your scripts entry:

```
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vite dev"
  },
```


### .gitignore
Exclude `node_modules`, `.DS_Store`, and any other system files you don't want in your repo


## 3. Test Your files
Run your react app by issuing the following command via the command line:

```
$ npm run dev
```

You should see the following output:

```bash

  VITE v5.2.7  ready in 84 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```

If you configured everything correctly, when you navigate to [http://localhost:5173/](http://localhost:5173/) in your web browser, your react app should appear with the message "Hello React".

## 4. Querying Spotify
For this React project, we will be working with Spotify's REST API. Ordinarily, to use their API, you would register for an API key with Spotify. However, to save time, Sarah has created a proxy server called [API Tutor](https://apitutor.org) that simplifies the API requests to Spotify (and a few other providers). The proxy server does two things:

1. Simplifies the data structure that is returned from Spotify 
2. Appends Sarah's Spotify API key in the header so that you don't have to register for an account.
    * Footnote: this isn't technically kosher, but it's only for educational purposes and I would never do this for a "real world" app.

The API endpoint that you will all be using is this one:

[https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=album&limit=2](https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=album&limit=2)

There are three query parameters that you can adjust:
* `q`: the search term
* `type`: the resource type. Valid options are `album`, `track`, or `artist`
* `limit`: how many results to return

Try playing around with these three parameters to see what happens.

## 5. Warmup: Using the antd component library
Recall from lecture on Thursday, that you can use Ant Design components by importing them from the `antd` component library. Let's practice doing this.

### Make some antd images
In `App.jsx`, import the Image component from the `antd` library, and add some image tags inside of the `<main></main>` tag. Check out the documentation to figure out how to do this:

* [https://ant.design/components/image](https://ant.design/components/image)

If you want some dummy photos, you can use a random image generator like [https://picsum.photos](https://picsum.photos). In the samples below, the first number specifies the width of the photo you want and the second number specifies the height. To "trick" your browser to make more than one image request (versus caching the same image and using it over and over again), append a unique query parameter at the end of each url (could be anything).

* https://picsum.photos/400/400?id=1
* https://picsum.photos/300/300?foo=bar

### Make a carousel
Using the antd `Carousel` component, see if you can make a carousel of Beyonce albums. Here is a list of JSON objects representing 5 of Beyonce's albums:

```json
[
   {
      "id": "6BzxX6zkDsYKFJ04ziU5xQ",
      "name": "COWBOY CARTER",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599",
      "spotify_url": "https://open.spotify.com/album/6BzxX6zkDsYKFJ04ziU5xQ"
   },
   {
      "id": "2UJwKSBUz6rtW4QLK74kQu",
      "name": "BEYONCÉ [Platinum Edition]",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2730d1d6e9325275f104f8e33f3",
      "spotify_url": "https://open.spotify.com/album/2UJwKSBUz6rtW4QLK74kQu"
   },
   {
      "id": "6PeoltoiWQWCyWA0JBHVGN",
      "name": "16 CARRIAGES",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273f5220893852002a2a3078bab",
      "spotify_url": "https://open.spotify.com/album/6PeoltoiWQWCyWA0JBHVGN"
   },
   {
      "id": "6oxVabMIqCMJRYN1GqR3Vf",
      "name": "Dangerously In Love",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27345680a4a57c97894490a01c1",
      "spotify_url": "https://open.spotify.com/album/6oxVabMIqCMJRYN1GqR3Vf"
   },
   {
      "id": "2m1enA3YrMLVvR3q0MqLpL",
      "name": "COWBOY CARTER",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2734903a9678d5664b9cd9a3fd8",
      "spotify_url": "https://open.spotify.com/album/2m1enA3YrMLVvR3q0MqLpL"
   }
]
```

See if you can figure out how to use JavaScript's built-in `Array.map()` function to programmatically generate each slide of the carousel. Try asking ChatGPT something like 

> "How do I create JSX components from a list of objects in React?"


#### Solution
Inside the App() function, try this:

```javascript

    ...
    const carouselStyles = {
        "width": "640px", 
        "border": "solid 1px #000", 
        "margin": "auto"
    };
    const albums = [
        {
           "id": "6BzxX6zkDsYKFJ04ziU5xQ",
           "name": "COWBOY CARTER",
           "image_url": "https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599",
           "spotify_url": "https://open.spotify.com/album/6BzxX6zkDsYKFJ04ziU5xQ"
        },
        {
           "id": "2UJwKSBUz6rtW4QLK74kQu",
           "name": "BEYONCÉ [Platinum Edition]",
           "image_url": "https://i.scdn.co/image/ab67616d0000b2730d1d6e9325275f104f8e33f3",
           "spotify_url": "https://open.spotify.com/album/2UJwKSBUz6rtW4QLK74kQu"
        }
        ...
     ];

    function albumToJSX(albumJSON) {
        return (
            <div key={albumJSON.id}>
                <img src={albumJSON.image_url} />
                <h3>{albumJSON.name}</h3>
            </div>
        )
    }

    return (
        <div style={carouselStyles}>
            <Carousel dotPosition="top">
                { 
                    albums.map(albumToJSX)
                }
            </Carousel>
        </div>
    );
```

Note that the argument within `albums.map()` is a function definition that is invoked for each JSON object in the list. The job of "map()" is to return a new array with a data transformation applied to each element. In this case, map returns a list of JSX objects, where each JSX object is a visual representation of the album.


## 6. Your Task: Allow your user to query, display, and listen to songs
To complete this lab, please do the following:

1. Create a form -- using the `antd` form components (that we reviewed during lecture) -- that allows a user to input:
    * A search term (e.g., "Beyonce")
    * The number of songs they want (max is 20)
2. When the clicks the search button, issue a query to Spotify with the user-specified `q` and `limit` arguments.
3. When the response comes back from the server draw a carousel with an audio player (iframe) for each song -- one per slide.


### Hints

Create a state variable to hold the tracks:

```javascript
const [tracks, setTracks] = useState([]);
```

Create a function that transforms each track JSON object to an iframe JSX. Your JSX iframe should look something like this:

```html
<iframe
    key="1EjQRTG53jsinzk2xlVVJP"
    src="https://open.spotify.com/embed/track/1EjQRTG53jsinzk2xlVVJP?utm_source=generator" 
    width="100%" 
    border="0"
    height="352" 
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"></iframe>
```

The function that fetches the data should look something like this:

```javascript
async function fetchData() {
    const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';
    const url = `${baseURL}?q=${searchTerm}&type=${dataType}&limit=5`;
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    // set state variable to redraw...
}
```


### Extra Credit
1. See if you can deploy your React App on GitHub pages.
    * Hint: Check out the [README.md](https://github.com/cs-at-unca/ant-design-components/README.md) from the in-class demo.
2. Refactor `App.jsx` so that the **Form** functionality and the **Carousel** functionality are separated into two standalone components. Then, get them to talk to each other.
    * In other words, how does the Form component notify the Carousel to redraw after the user submits their search?
    
## Submitting

Add, commit, and push all of your files. Then tag Semmy and Sarah to review.
