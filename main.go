package main

import (
	"log"
	"net/http"
)

func main() {
	PORT := ":80"
	log.Print("Running server on " + PORT)
	http.Handle("/static/", http.FileServer(http.Dir("public")))
	log.Fatal(http.ListenAndServe(PORT, nil))
}
