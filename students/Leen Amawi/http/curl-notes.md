## curl -X GET "https://httpbin.org/status/200" -H "accept: text/plain"

Response:
HTTP/2 200 
date: Mon, 07 Sep 2026 19:55:52 GMT
content-type: text/html; charset=utf-8

## curl -i -X POST "https://jsonplaceholder.typicode.com/posts" \ -H "Content-Type: application/json" \  -d '{"title":"Fix login","body":"Test POST request","userId":1}'

Response:
HTTP/2 201 
content-type: application/json; charset=utf-8
{
  "title": "Fix login",
  "body": "Test POST request",
  "userId": 1,
  "id": 101
}
## curl -i -X GET "https://httpbin.org/status/404" -H "accept: text/plain"

Response:
HTTP/2 404 
content-type: text/html; charset=utf-8
