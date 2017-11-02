# Twittius

Codius contract that tweets when paid.

```sh
$ export TWITTIUS_PORT=8080
$ export TWITTIUS_CREDENTIALS='
  {
    "consumer_key": "...",
    "consumer_secret": "...",
    "access_token": "...",
    "access_token_secret": "...",
    "timeout_ms": 60000 
  }'
$ node index.js &
$ ilp-curl -X POST localhost:8080/tweet --json -F status="Hello world"
{"success":true}
```
