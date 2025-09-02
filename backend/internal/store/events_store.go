package store

import (
	"database/sql"
	"fmt"
	"time"
)

type Event struct {
	ID          int64     `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Location    string    `json:"location"`
	Price       int       `json:"price"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

type EventStore interface {
	CreateEvent(*Event) (*Event, error)
	GetEventByID(id int64) (*Event, error)
	UpdateEvent(*Event) error
	DeleteEvent(id int64) error
}

type PostgresEventStore struct {
	db *sql.DB
}

func NewPostgresEventStore(db *sql.DB) *PostgresEventStore {
	return &PostgresEventStore{db: db}
}

func (pg *PostgresEventStore) CreateEvent(event *Event) (*Event, error) {
	query := `
		INSERT INTO events (name, description, location, price)
		VALUES ($1, $2, $3, $4)
		RETURNING id, created_at, updated_at
	`

	err := pg.db.QueryRow(
		query,
		event.Name,
		event.Description,
		event.Location,
		event.Price,
	).Scan(&event.ID, &event.CreatedAt, &event.UpdatedAt)
	if err != nil {
		return nil, fmt.Errorf("insert event: %w", err)
	}

	return event, nil
}

func (pg *PostgresEventStore) GetEventByID(id int64) (*Event, error) {
	event := &Event{}

	query := `
		SELECT id, name, description, location, price, created_at, updated_at
		FROM events
		WHERE id = $1
	`

	err := pg.db.QueryRow(query, id).Scan(
		&event.ID,
		&event.Name,
		&event.Description,
		&event.Location,
		&event.Price,
		&event.CreatedAt,
		&event.UpdatedAt,
	)
	if err == sql.ErrNoRows {
		return nil, sql.ErrNoRows
	}
	if err != nil {
		return nil, fmt.Errorf("get event by id: %w", err)
	}

	return event, nil
}
