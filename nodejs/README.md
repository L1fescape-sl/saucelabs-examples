## Running

```
$ npm install
$ SAUCE_USERNAME=<username> SAUCE_ACCESS_KEY=<access key> npm start
```

If the remote address you're using doesn't support https, you may need to include:

```
$ NODE_TLS_REJECT_UNAUTHORIZED=0 SAUCE_USERNAME=<username> SAUCE_ACCESS_KEY=<access key> REMOTE_ADDRESS=<remote address> npm start
```
