#Startip [![Travis-CI][ci-badge]][ci] [![GitHub issues][issues-badge]][issues]

Starter Application using React, Redux, Express and various other technologies.

##Issues 

Please file bugs [here][issues].

Include `closes`, `fixes`, or `resolves` in a commit message to close the issue.  
For example `git commit -m "This closes #34, and closes #23"`

##Development

### Dependencies
Start by installing all dependencies:
```
npm i --no-optional
```

### Configure
Create a `.env` file in the root of the application to connect to VersionOne instance:

```
MAILGUN_API_KEY=XXXX-XXXX-XXXX
MAILGUN_DOMAIN=XXXX-XXXX-XXXX
```

### Run
Start a web server that can be reached by localhost:3000 by default.
```
npm gulp dev
```

### Test
Run unit tests using the cli. Wallaby is also supported.
```
npm test
```


[ci]: https://travis-ci.org/walkerrandolphsmith/react-redux-express-starter
[ci-badge]: https://img.shields.io/travis/walkerrandolphsmith/react-redux-express-starter.svg

[issues]: https://github.com/walkerrandolphsmith/react-redux-express-starter/issues
[issues-badge]: https://img.shields.io/github/issues/walkerrandolphsmith/react-redux-express-starter.svg