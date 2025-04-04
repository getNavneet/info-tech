import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser, getEvents, saveEvent, deleteEvent } from '../utils/localStorage';
import { Event } from '../types';

function AdminDashboard() {
  const currentUser = getCurrentUser();
  const [events, setEvents] = useState<Event[]>(getEvents());
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    category: 'Tech',
    description: ''
  });

  if (!currentUser?.isAdmin) {
    return <Navigate to="/" />;
  }

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    const event: Event = {
      id: Date.now().toString(),
      ...newEvent,
      registrations: []
    };
    saveEvent(event);
    setEvents(getEvents());
    setNewEvent({ name: '', date: '', category: 'Tech', description: '' });
  };

  const handleDeleteEvent = (eventId: string) => {
    deleteEvent(eventId);
    setEvents(getEvents());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-black/30 p-6 rounded-lg">
          <h3 className="text-orange-500 mb-2">Total Events</h3>
          <p className="text-4xl font-bold">{events.length}</p>
        </div>
        <div className="bg-black/30 p-6 rounded-lg">
          <h3 className="text-orange-500 mb-2">Upcoming Events</h3>
          <p className="text-4xl font-bold">
            {events.filter(e => new Date(e.date) > new Date()).length}
          </p>
        </div>
        <div className="bg-black/30 p-6 rounded-lg">
          <h3 className="text-orange-500 mb-2">Total Registrations</h3>
          <p className="text-4xl font-bold">
            {events.reduce((acc, event) => acc + event.registrations.length, 0)}
          </p>
        </div>
        <div className="bg-black/30 p-6 rounded-lg">
          <h3 className="text-orange-500 mb-2">Active Users</h3>
          <p className="text-4xl font-bold">{0}</p>
        </div>
      </div>

      <div className="bg-black/30 p-6 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">Add New Event</h2>
        <form onSubmit={handleAddEvent} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Event Name</label>
            <input
              type="text"
              value={newEvent.name}
              onChange={e => setNewEvent({ ...newEvent, name: e.target.value })}
              className="w-full px-4 py-3 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Event Date</label>
            <input
              type="date"
              value={newEvent.date}
              onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
              className="w-full px-4 py-3 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Category</label>
            <select
              value={newEvent.category}
              onChange={e => setNewEvent({ ...newEvent, category: e.target.value as 'Tech' | 'Gaming' })}
              className="w-full px-4 py-3 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
            >
              <option value="Tech">Tech</option>
              <option value="Gaming">Gaming</option>
            </select>
          </div>

          <div>
            <label className="block text-white mb-2">Description</label>
            <textarea
              value={newEvent.description}
              onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
              className="w-full px-4 py-3 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition"
          >
            Add Event
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center mb-6">Manage Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event.id} className="bg-black/30 p-6 rounded-lg">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                <p className="text-sm text-gray-300">{event.date}</p>
                <span className="inline-block px-3 py-1 bg-orange-600 rounded text-sm mt-2">
                  {event.category}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Registrations ({event.registrations.length}):</h4>
                {event.registrations.length === 0 && (
                  <p className="text-gray-400">No registrations yet</p>
                )}
              </div>
              <button
                onClick={() => handleDeleteEvent(event.id)}
                className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Delete Event
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;