package routes

import (
	"backend/internal/app"

	"github.com/go-chi/chi/v5"
)

func SetUpRoutes(app *app.Application) *chi.Mux {
	r := chi.NewRouter()

	r.Group(func(r chi.Router) {})
	r.Get("/health", app.HealthChecker)
	r.Get("/", app.Welcome)
	return r
}
