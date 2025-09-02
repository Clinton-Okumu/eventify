package main

import (
	"backend/internal/app"
	"backend/internal/routes"
	"flag"
	"fmt"
	"net/http"
	"time"
)

func main() {
	var port int
	flag.IntVar(&port, "port", 8080, "Eventify backend server port")
	flag.Parse()

	app, err := app.NewApplication()
	if err != nil {
		panic(err)
	}
	defer app.DB.Close()
	r := routes.SetUpRoutes(app)

	server := &http.Server{
		Addr:         fmt.Sprintf(":%d", port),
		Handler:      r,
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	app.Logger.Printf("Starting server on port %d link: http://localhost:%d", port, port)
	err = server.ListenAndServe()
	if err != nil {
		app.Logger.Fatal(err)
	}
}
