import * as courseDB from './courseModule.js';

console.log("Lookup by CourseId CS 111");
console.log(courseDB.lookupByCourseId("CS 111"));

console.log("\nLookup by CourseId CS 602");
console.log(courseDB.lookupByCourseId("CS 602"));

console.log("\nLookup by CourseId ^CS 2");
console.log(courseDB.lookupByCourseId("^CS 2"));

console.log("\nLookup by CourseId 6.2$");
console.log(courseDB.lookupByCourseId("6.2$"));

console.log("\nLookup by CourseName Web");
console.log(courseDB.lookupByCourseName("Web"));

console.log("\nA Random Course");
console.log(courseDB.getRandomCourse());

console.log("\nA Random Course");
console.log(courseDB.getRandomCourse());


// First additional test case

console.log("\nAdditional Lookup by CourseId CS 601");
console.log(courseDB.lookupByCourseId("CS 601"));

console.log("\nAdditional Lookup by CourseId ^CS 5");
console.log(courseDB.lookupByCourseId("^CS 5"));


// Second additional test case

console.log("\nAdditional Lookup by CourseName Data");
console.log(courseDB.lookupByCourseName("Data"));

console.log("\nAdditional Lookup by CourseName Programming");
console.log(courseDB.lookupByCourseName("Programming"));