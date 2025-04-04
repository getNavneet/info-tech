import { User, Event } from '../types';

const USERS_KEY = 'fusion_users';
const EVENTS_KEY = 'fusion_events';
const CURRENT_USER_KEY = 'fusion_current_user';

export const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user: User) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const setCurrentUser = (user: User | null) => {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};

export const getEvents = (): Event[] => {
  const events = localStorage.getItem(EVENTS_KEY);
  return events ? JSON.parse(events) : [];
};

export const saveEvent = (event: Event) => {
  const events = getEvents();
  events.push(event);
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
};

export const deleteEvent = (eventId: string) => {
  const events = getEvents().filter(event => event.id !== eventId);
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
};

export const registerForEvent = (eventId: string, userId: string) => {
  const events = getEvents();
  const event = events.find(e => e.id === eventId);
  if (event) {
    event.registrations.push(userId);
    localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  }
};