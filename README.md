This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Tips to develop

- VSCode is the editor preferred to develop this project, but use any that you're confortable using
- Download any extension to get the TSLint helping you out with your code. **(this is mandatory)**
- To start development on this project you have to setup your firebase auth, because the project is already using firebase as authenticator to Login with facebook. Later i will develop an alternative to not be necessary doing that.
- This project has a backend in springboot, but its not necessary to use it, the mocks are available in the directory utils/mocks

## `Environment`

Create a file `.env` on the root of this project, and inside of it copy the code:

REACT_APP_FIREBASE_API_KEY=`YOUR_FIREBASE_API_KEY`

REACT_APP_FIREBASE_AUTH_DOMAIN=`YOUR_FIREBASE_AUTH`

REACT_APP_LOCAL_API=`YOUR_SPRINGBOOT_APPLICATION_URL`

REACT_APP_USER_MOCK=`true (if you want to use mock instead of the springboot application`

