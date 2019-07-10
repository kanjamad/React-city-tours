# City tours

## User Users stories
* Example, If user interested in New York user can check with more information.


## 3 options to setting up the folder structure
1. components/Navbar/Navbar.js
* App.js
* Just get annoying that need to write components, Navbar and then other Navbar.
```
import Navbar from "./components/Navbar/Navbar";

```
2. components/TourList/index.js
* App.js
* Can used index.js that would be the main import 
```
mport TourList from "./components/TourList/";

```

3. components/Tour
* Create file call Tour.js
* components/Tour/package.json
* However also could be annoyed by the fact that eventually I can have bunch of index files. Imagine if I would have here index.js for the Tour because for the TourList I did index.js 
* For Tour.js I chose to use the package.js I think that package.json since it works exactly the same way. 
* Remember in the TourList I can still import Tour without accessing the actual file because I have setup package.json
* So on package.json I just said the main file is gonna be my Tour.js 
* I think that would be a little bit easier option where I am not going to have 10,000 or so many index.js tabs because again for my small app I wouldn't care about it. But imagine I am gonna have 10 components 15 components or 100 components up and it gets annoying really fast.
```
{
    "main":"Tour.js"
}

```
* components/TourList/index.js
```
import Tour from '../Tour';

```
#### summary
1. basically setting up my folder file the same name as I have the folder 
2. Setting up with the index.js and that's gonna be the main thing that's gonna be exported 
3. Used package.json  and I can setup the menu


## Additional Resources

1. <a href="https://www.npmjs.com/package/node-sass" target="_blank">Node-Sass</a>
2. <a href="https://fonts.google.com/" target="_blank">Google fonts</a>