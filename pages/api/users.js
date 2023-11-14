// pages/api/users.js

import { NextApiRequest, NextApiResponse } from 'next';

// Placeholder user data
const users = [
  { id: 1, username: 'user1', email: 'user1@example.com', phone: '1234567890', creationDate: '2021-01-01' },
  { id: 2, username: 'user2', email: 'user2@example.com', phone: '0987654321', creationDate: '2021-02-01' },
  // Add more users as needed
];

const generateRandomPhoneNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10000000000);
    const phoneNumber = randomNumber.toString().padStart(10, '0');
    return phoneNumber;
  };

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    // Handle POST request
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: 'Username and password are required' });
      return;
    }
    // In a real application, you would add the new user to the database here
    const newUser = {
      id: users.length + 1,
      username,
      email: `${username}@example.com`,
      phone: generateRandomPhoneNumber(),
      creationDate: new Date().toISOString().slice(0,10),
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
