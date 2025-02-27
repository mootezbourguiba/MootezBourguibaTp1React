import axios from 'axios';

const url = "http://localhost:3001/events";

export const getAllEvents = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return []; // Retourner un tableau vide en cas d'erreur
  }
};

export const getEventByName = async (name) => {
  try {
    // Utiliser le nom pour filtrer les résultats
    const response = await axios.get(`${url}?name=${name}`);
    const events = response.data; // json-server retourne un tableau
    return events.length > 0 ? events[0] : null; // Retourner le premier événement trouvé ou null
  } catch (error) {
    console.error(`Error fetching event with name ${name}:`, error);
    return null;
  }
};

export const addEvent = async (event) => {
  try {
    const response = await axios.post(url, event);
    return response.data;
  } catch (error) {
    console.error("Error adding event:", error);
    return null; // Retourner null en cas d'erreur
  }
};

export const editEvent = async (id, event) => {
  try {
    const response = await axios.put(`${url}/${id}`, event);
    return response.data;
  } catch (error) {
    console.error(`Error editing event with id ${id}:`, error);
    return null; // Retourner null en cas d'erreur
  }
};

export const deleteEvent = async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    return true; // Retourner true si la suppression réussit
  } catch (error) {
    console.error(`Error deleting event with id ${id}:`, error);
    return false; // Retourner false si la suppression échoue
  }
};