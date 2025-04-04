export interface User {
  id: string;
  fullName: string;
  email: string;
  isAdmin: boolean;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  category: 'Tech' | 'Gaming';
  description: string;
  registrations: string[]; // array of user IDs
}