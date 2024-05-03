class Personne{
    constructor(nom, age){
        this.nom = nom;
        this.age = age;
    }
    decrire(){
        document.write(this.nom+ ", " + this.age + "age");
    }
}
