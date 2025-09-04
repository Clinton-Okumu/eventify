package app

import (
	"backend/internal/api"
	"backend/internal/models"
	"backend/internal/store"
	"backend/migrations"
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
)

type Application struct {
	Logger        *log.Logger
	DB            *sql.DB
	EventsHandler *api.EventsHandler
}

func NewApplication() (*Application, error) {
	pgDB, err := models.Open()
	if err != nil {
		return nil, err
	}

	err = models.MigrateFS(pgDB, migrations.FS, ".")
	if err != nil {
		panic(err)
	}

	logger := log.New(os.Stdout, "", log.Ldate|log.Ltime)

	// stores will go here
	eventsStore := store.NewPostgresEventStore(pgDB)

	// handlers
	eventHandler := api.NewEventsHandler(eventsStore, logger)

	app := &Application{
		Logger:        logger,
		EventsHandler: eventHandler,
		DB:            pgDB,
	}

	return app, nil
}

func (a *Application) HealthChecker(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Status is available\n")
}

func (a *Application) Welcome(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to Eventify!\n")
}
