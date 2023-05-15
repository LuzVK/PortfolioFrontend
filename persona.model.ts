export class persona{
    id?: number;
    nombre:String;
    acercade: String;
    mail: String;
    foto: String;

    constructor(nombre: String, acercade: String, mail: String, foto: String){
        this.nombre=nombre;
        this.acercade= acercade;
        this.mail= mail;
        this.foto=foto;
    }

}