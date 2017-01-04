package main

import (
	"fmt"
	"log"
	"net/http"
)

const indexHTML = `<html>
<head>
	<title>Hello</title>
	<link rel="stylesheet" href="/static/common/common.css" />
    <link rel="stylesheet" href="/static/home/home.css" />
</head>
<body>
<div id="root"></div>
</body>
    <script src="/static/common/common.js"></script>
    <script src="/static/home/home.js"></script>
</html>
`

func main() {

	http.Handle("/static/", http.FileServer(http.Dir("public")))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}
		fmt.Fprintf(w, indexHTML)

		pusher, ok := w.(http.Pusher)
		if ok { // Push is supported. Try pushing rather than waiting for the browser.
			pusher.Push("/static/common/common.css", nil)
			pusher.Push("/static/home/home.css", nil)
			pusher.Push("/static/common/common.js", nil)
			pusher.Push("/static/home/home.js", nil)
		}
	})

	log.Printf("About to listen on 10443. Go to https://127.0.0.1:10443/")
	err := http.ListenAndServeTLS(":10443", "cert.pem", "key.pem", nil)
	log.Fatal(err)
}
