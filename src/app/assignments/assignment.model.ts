export class Assignment {
  //id mongoDB
  _id!:string;
  // id "artificiel" qu'on a utilisé jusqu'à présent
  // en modifiant un peu le code du projet, on peut
  // s'en débarasser, il est redondant avec l'id mongoDB
  id!:number;
  nom!:string;
  dateDeRendu!:Date;
  rendu!:boolean;
}
