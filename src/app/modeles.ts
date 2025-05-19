export interface Apprenant{
  id ?: number,
  nom: string,
  prenom:string|null,
  image?: string,
  promo: number|null;
}

export interface Enseignant{
  id ?: number,
  nom: string,
  prenom: string,
  matieres:string,
  Images?: string;

}









