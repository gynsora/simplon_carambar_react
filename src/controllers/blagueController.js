import { fetchRandomBlague } from "../models/blagueModel";

export async function getRandomBlague() {
  try {
    const randomBlague = await fetchRandomBlague();
    //console.log(blague);
    return randomBlague;
  } catch (error) {
    //console.error("Erreur dans le controller:", error);
    return [];
  }
}