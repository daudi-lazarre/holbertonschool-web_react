 /// <reference path="Teacher.ts"/>
 /// <reference path="Subject.ts"/>
 /// <reference path="Cpp.ts"/>
 /// <reference path="React.ts"/>

 namespace Subjects {
    export interface Teacher { 
        // Add a new attribute to the Teacher interface 
        // (number of years of experience teaching Java)
        experienceTeachingJava?: number;
    }
    export class Java extends Subject {
        // Method that return a string with an list of requirements for Java
        getRequirements() : string {
            return "Here is the list of requirements for Java";
        }
        // Method that return a string with an Available teacher (First name)
        getAvailableTeacher() : string {
            if (typeof this.teacher.experienceTeachingJava === "undefined"
                || this.teacher.experienceTeachingJava === 0) {
                    return "No available teacher"; // If no teacher is available
                }
                // If teacher is available
                return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
