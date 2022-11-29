 /// <reference path="Teacher.ts"/>
 /// <reference path="Subject.ts"/>
 /// <reference path="Cpp.ts"/>

 /**
  * React class that extends the Subject class
  */
  namespace Subjects {
    export interface Teacher {
        // Add a new attribute to the Teacher interface 
        // (number of years of experience teaching React)
        experienceTeachingReact?: number;
    }
    export class React extends Subject {
        // Method that return a string with a list of requirements for React
        getRequirements() : string {
            return "Here is the list of requirements for React";
        }

        // Method that return a string with an Available teacher (First name)
        getAvailableTeacher() : string {
            if (typeof this.teacher.experienceTeachingReact === "undefined"
                || this.teacher.experienceTeachingReact === 0) {
                    return "No available teacher"; // If no teacher is available
                }
                // If teacher is available
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
