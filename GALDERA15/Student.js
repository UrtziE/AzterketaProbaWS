import {Persona} from "./Persona";

class Student extends Persona{
    constructor(gender,age,address,course,color){
        super(gender,age,address);
        this.course=course
        this.color=color
    }
    setForExam(){

    }
    presentWork(){

    }
    takeBreak(){

    }
}