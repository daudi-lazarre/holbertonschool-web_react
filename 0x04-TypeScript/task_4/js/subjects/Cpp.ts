 /// <reference path="Teacher.ts"/>
 /// <reference path="Subject.ts"/>

/**
 * Cpp class that extends the Subject class
 */
 namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }
  
    export class Cpp extends Subject {
        // Method that return a string with a list of requirements for Cpp
        getRequirements(): string {
            return `Here is the list of requirements for Cpp`;
        }
        // Method that return a string with an Available teacher (First name)
        getAvailableTeacher(): string {
            if (typeof this.teacher.experienceTeachingC === "undefined"
                || this.teacher.experienceTeachingC === 0) {
                    return "No available teacher"; // If no teacher is available
                }
                // If teacher is available
                return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
