 /// <reference path="Teacher.ts"/>

/**
 * Subject class that implements the Teacher interface
 * and has one setter method: `setTeacher` that accepts a teacher in argument
 */
 namespace Subjects {
    export class Subject {
        teacher: Teacher;
        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        };
    }
}
