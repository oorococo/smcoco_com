package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"golang.org/x/net/html"
	"golang.org/x/net/http2"
)

func main() {
	http.HandleFunc("/bar", func(w http.ResponseWriter, r *http.Request) {

		w.Header().Add("Link", "<https://static.smcoco.com/auth/auth.css>; rel=preload;")

		fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
	})

	s := &http.Server{
		Addr:           ":3003",
		Handler:        nil,
		ReadTimeout:    30 * time.Second,
		WriteTimeout:   30 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}
	http2.ConfigureServer(s, nil)

	log.Fatal(s.ListenAndServe())

}
