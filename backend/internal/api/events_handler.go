package api

import (
	"backend/internal/store"
	"backend/internal/utils"
	"database/sql"
	"encoding/json"
	"errors"
	"log"
	"net/http"
)

type EventsHandler struct {
	eventsStore store.EventStore
	logger      *log.Logger
}

func NewEventsHandler(eventsStore store.EventStore, logger *log.Logger) *EventsHandler {
	return &EventsHandler{
		eventsStore: eventsStore,
		logger:      logger,
	}
}

func (eh *EventsHandler) HandleGetEventByID(w http.ResponseWriter, r *http.Request) {
	eventID, err := utils.ReadIDParam(r)
	if err != nil {
		eh.logger.Printf("ERROR: readIDParam: %v", err)
		utils.WriteJSON(w, http.StatusBadRequest, utils.Envelope{"error": "invalid event id"})
		return
	}
	event, err := eh.eventsStore.GetEventByID(eventID)
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			utils.WriteJSON(w, http.StatusNotFound, utils.Envelope{"error": "event not found"})
			return
		}
		eh.logger.Printf("ERROR: getEventByID: %v", err)
		utils.WriteJSON(w, http.StatusInternalServerError, utils.Envelope{"error": "internal server error"})
		return
	}
	utils.WriteJSON(w, http.StatusOK, utils.Envelope{"event": event})
}

func (eh *EventsHandler) HandleCreateEvent(w http.ResponseWriter, r *http.Request) {
	var event store.Event
	err := json.NewDecoder(r.Body).Decode(&event)
	if err != nil {
		eh.logger.Printf("ERROR: decodeCreateEvent: %v", err)
		utils.WriteJSON(w, http.StatusBadRequest, utils.Envelope{"error": "invalid request sent"})
		return
	}

	createdEvent, err := eh.eventsStore.CreateEvent(&event)
	if err != nil {
		eh.logger.Printf("ERROR: createEvent: %v", err)
		utils.WriteJSON(w, http.StatusInternalServerError, utils.Envelope{"error": "failed to create event"})
		return
	}
	utils.WriteJSON(w, http.StatusCreated, utils.Envelope{"event": createdEvent})
}

func (eh *EventsHandler) HandleUpdateEventByID(w http.ResponseWriter, r *http.Request) {
	eventID, err := utils.ReadIDParam(r)
	if err != nil {
		eh.logger.Printf("ERROR: readIDParam: %v", err)
		utils.WriteJSON(w, http.StatusBadRequest, utils.Envelope{"error": "invalid event update id"})
		return
	}
	existingEvent, err := eh.eventsStore.GetEventByID(eventID)
	if err != nil {
		eh.logger.Printf("ERROR: getEventByID: %v", err)
		utils.WriteJSON(w, http.StatusInternalServerError, utils.Envelope{"error": "internal server error"})
		return
	}

	if existingEvent == nil {
		http.NotFound(w, r)
		return
	}

	var updateEventRequest struct {
		Name        *string `json:"name"`
		Description *string `json:"description"`
		Location    *string `json:"location"`
		Price       *int    `json:"price"`
	}
	err = json.NewDecoder(r.Body).Decode(&updateEventRequest)
	if err != nil {
		eh.logger.Printf("ERROR: decodeUpdateRequest: %v", err)
		utils.WriteJSON(w, http.StatusBadRequest, utils.Envelope{"error": "invalid request sent"})
		return
	}
	if updateEventRequest.Name != nil {
		existingEvent.Name = *updateEventRequest.Name
	}
	if updateEventRequest.Description != nil {
		existingEvent.Description = *updateEventRequest.Description
	}
	if updateEventRequest.Location != nil {
		existingEvent.Location = *updateEventRequest.Location
	}
	if updateEventRequest.Price != nil {
		existingEvent.Price = *updateEventRequest.Price
	}

	err = eh.eventsStore.UpdateEvent(existingEvent)
	if err != nil {
		eh.logger.Printf("ERROR: updateEvent: %v", err)
		utils.WriteJSON(w, http.StatusInternalServerError, utils.Envelope{"error": "internal server error"})
		return
	}
	utils.WriteJSON(w, http.StatusOK, utils.Envelope{"event": existingEvent})
}

func (eh *EventsHandler) HandleDeleteEventByID(w http.ResponseWriter, r *http.Request) {
	eventID, err := utils.ReadIDParam(r)
	if err != nil {
		eh.logger.Printf("ERROR: readIDParam: %v", err)
		utils.WriteJSON(w, http.StatusBadRequest, utils.Envelope{"error": "invalid event delete id"})
		return
	}

	err = eh.eventsStore.DeleteEvent(eventID)
	if err != nil {
		eh.logger.Printf("ERROR: deleteEvent: %v", err)
		utils.WriteJSON(w, http.StatusInternalServerError, utils.Envelope{"error": "internal server error"})
		return
	}

	utils.WriteJSON(w, http.StatusNoContent, utils.Envelope{"event": "event deleted"})
}
