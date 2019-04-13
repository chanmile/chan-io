package main

import (
    "fmt"
    "log"
    "net/http"
    "github.com/zmb3/spotify"

)

const redirectURI = "http://localhost:8099/spotify/callback"
var (
	auth  = spotify.NewAuthenticator(redirectURI, spotify.ScopeUserReadPrivate)
	ch    = make(chan *spotify.Client)
	state = "abc123"
)

func completeAuth(w http.ResponseWriter, r *http.Request) {
    fmt.Println("Attempting spotify Auth...")
	tok, err := auth.Token(state, r)
	if err != nil {
		http.Error(w, "Couldn't get token", http.StatusForbidden)
		log.Fatal(err)
	}
	if st := r.FormValue("state"); st != state {
		http.NotFound(w, r)
		log.Fatalf("State mismatch: %s != %s\n", st, state)
	}
	// use the token to get an authenticated client
	client := auth.NewClient(tok)
	fmt.Fprintf(w, "Login Completed!")
	ch <- &client
}

func main() {
    fmt.Println("Initializing server")
    http.HandleFunc("/spotify/callback", completeAuth)
    http.Handle("/", http.FileServer(http.Dir("./build")))
    log.Fatal(http.ListenAndServe(":8099", nil))
}
