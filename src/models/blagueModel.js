const API_URL = "https://simplon-carambar-api.onrender.com/blagues/random"; 

export async function fetchRandomBlague() {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération de la blague.");
  }
  return await response.json();
}
