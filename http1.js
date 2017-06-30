var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
    var url = req.url;
   console.log(url)
    switch (url) {
        case "/img.html":
            fs.readFile("img.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break
        case "/index.js":
            fs.readFile("index.js", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/javascript"})
                    res.end(data)
                }
            });
            break;
        case "/xiao.jpg":
            fs.readFile("xiao.jpg", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "image/jpeg;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/logo.html":
            fs.readFile("logo.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
		case "/index.html":
            fs.readFile("index.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
         case "/index.css":
            fs.readFile("err.css", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/css"})
                    res.end(data)
                }
            });
            break;
            default: //其他请求
            res.end("404 Not Found")
    }
}).listen(3000)



