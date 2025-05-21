const API_URL = "/blagues/random"; //le reste de l'url est dans le "proxy" de package json

export async function fetchBlague() {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération de la blague.");
  }
  return await response.json();
}
