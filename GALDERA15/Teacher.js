import {Persona} from "./Persona";

class Teacher extends Persona{
    constructor(gender,age,address,speciality,qualification){
        super(gender,age,address);
        this.speciality=speciality
        this.qualification=qualification
    }
    givenIntructions(){

    }
    assessWork(){

    }
    teach(){

    }
}