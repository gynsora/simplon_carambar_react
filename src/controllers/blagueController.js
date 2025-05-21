import { fetchBlague } from "../models/blagueModel";

export async function getBlague() {
  try {
    const blague = await fetchBlague();
    //console.log(blague);
    return blague;
  } catch (error) {
    //console.error("Erreur dans le controller:", error);
    return [];
  }
}