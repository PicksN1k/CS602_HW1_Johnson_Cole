import * as courseDB from './courseModule.js';

console.log(courseDB.lookupByCourseId("CS 111"));

console.log(courseDB.lookupByCourseId("CS 602"));

console.log(courseDB.lookupByCourseId("^CS 2"));

console.log(courseDB.lookupByCourseId("6.2$"));

console.log(courseDB.lookupByCourseName("Web"));

console.log(courseDB.getRandomCourse());

console.log(courseDB.getRandomCourse());


// include two additional test cases for each lookup

console.log(courseDB.lookupByCourseId("CS 601"));

console.log(courseDB.lookupByCourseId("^CS 5"));

console.log(courseDB.lookupByCourseName("Data"));

console.log(courseDB.lookupByCourseName("Programming"));