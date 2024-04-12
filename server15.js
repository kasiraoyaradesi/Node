import http from 'http'
import url from 'url'
http.createServer(function (req, res) {
  let q = url.parse(req.url, true).query;
  let name = q.name;
  let age = q.age;
  res.end(name+age);
}).listen(8080);
