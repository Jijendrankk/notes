import { useState } from 'react';

// Custom hook for managing notes with localStorage
export const useNotes = () => {
  const [notes, setNotes] = useState(getNotesFromLocalStorage());

  // Function to retrieve notes from localStorage
  function getNotesFromLocalStorage() {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  }

  // Function to set notes in localStorage
  function setNotesToLocalStorage(updatedNotes) {
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes([...updatedNotes]);
  }

  // Function to add a new note
  function addNote(newNote) {
    const updatedNotes = [newNote,...notes];
    setNotesToLocalStorage(updatedNotes);
  }

  // Function to update a note by ID
  function updateNote(id, updatedNote) {
    const updatedNotes = notes.map((note) => (note.createdAt === id ? { ...note, ...updatedNote } : note));
    setNotesToLocalStorage(updatedNotes);
  }

  // Function to delete a note by ID
  function deleteNote(id) {
    const updatedNotes = notes.filter((note) => note.createdAt !== id);
    setNotesToLocalStorage(updatedNotes);
  }

  return {
    notes,
    addNote,
    updateNote,
    deleteNote,
  };
};
