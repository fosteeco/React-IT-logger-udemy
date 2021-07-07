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
