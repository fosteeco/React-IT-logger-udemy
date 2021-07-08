# React IT Logger app -- dev journal

Following the Udemy react front to back course by Brad Traversy: https://www.udemy.com/course/modern-react-front-to-back/ \
His code for this project: https://github.com/bradtraversy/it-logger

## 75. React & JSON-Server Setup

Using I.T. logger as a backend for quick prototyping. \
https://github.com/typicode/json-server \
Initial app setup:

```
npx create-react-app .
npm i -D json-server concurrently
```

Will install redux and stuff later \
Added some data to db.json

Added run scripts to package.json:

```
    "json-server": "json-server --watch db.json --port 5000",
    "dev": "concurrently \"npm start\" \"npm run json-server\"",
```

Can run get requests to get info from db.json:

```
http://localhost:5000/logs
http://localhost:5000/techs
```

Can also delete information from the json file by sending a delete request:

```
http://localhost:5000/techs/${id_of_tech}
```

Added proxy to package.json:

```
    "proxy": "http://localhost:5000"
```

For the proxy to take effect you have to restart the server.

## 76. Materialize Setup

Materialize - css framework - https://materializecss.com/getting-started.html

```
npm install materialize-css
```

npm keeps complaining about vulnerabilities in 5 packages. Tried fixing it with this : https://github.com/raineorshine/npm-check-updates . Updated all the packages for the project to the latest versions and all the packages on this machine.\
Delete:

```
App.test.js
index.css
logo.svg
```

The icons for materialize were added to the index.html . Removed a lot of the react boiler plate

## 77. SearchBar & Logs Component

Setup the searchbar with materialize: https://materializecss.com/navbar.html

Logs.js is a component that gets data from the backend using the fetch command that is built in to javascript.

## 78. LogItem & Preloader Components

LogItem takes in a log as a prop and creates a nice looking list item.

Installled moment and react-moment

```
npm i moment react-moment
```

React moment allows us to format the date. We use it in the LogItem.js component. We also created a preloader.

## 79. AddBtn & AddLogModal Components

Created the modal with materialize css. We didn't write a single onChange function:

```
 const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
```

Instead we wrote a function inline for all the values passed into the modal. We did do an onSubmit function where we used materialize to display the warning for us. This part of the app also had it's own state so we used the useState hook. Here's what our on change functions looked like:

```
<input
    type="text"
    name="message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
/>
```

## 80. Edit & Tech Modal Components

Implemented modals for techs.

## 81. Redux Store & Provider Setup

Installing redux

```
npm i redux react-redux redux-thunk redux-devtools-extension
```

thunk - allows asynchronous actions
devtools - allopws us to use redux devtools for chrome \
First thing create a store in src/store.js \
Redux seems pretty neat. Instead of having multiple contexts for all of our different states we can have one context provider that pulls in all of the contexts from the /src/reducers/index.js file. The dev tools sound pretty powerful too.

## 82. Logs Reducer, Actions & Types

Created the logs reducer in /reducers . Types were also defined in the /actiosns folder. Instead of having a logState like we would have if we weren't using redux we have a logActions.js . Since we are using an asyncronous function fetch to get the logs we are using redux-thunk. The async events will return functions instead of payloads and types. Within those functions is where the dispatch function will deliver the type and payload.

## 83. Connecting Redux To a Component

To interact with redux from a component need to bring in something called connect.\

The workflow:

- Bring in connect
- Export connect
- Anything you want to bring in from state do mapStateToProps and bring it in.
- If you have an action to fire off, bring it in and add it as a second paramter to the connect function

## 84. Add Logs

Adding functionality with redux:
add action, handle reducer, add it to component.
Add log implemented.

## 85. Deleting logs

Trying on my own before watching video.
Looking at my implementation there's a few things that I notice.

- The delete method in logActions doesn't need headers passed into the fetch() function.
- The delete method should take in an ID instead of a log since it only needs the id to delete the log. Then I could've passed the id as the payload to the reducer instead of the whole log.
- I was correct about adding the functionality to the LogItem. I did pretty well there but I didn't create a function like Brad did. That would make it easier to see what the onClick does and he also included a message about log deleted with M.toast({html: "log deleted"}).
- Think I did pretty well for doing it on my own
