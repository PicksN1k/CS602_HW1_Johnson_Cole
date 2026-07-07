# CS602_HW1_Johnson_Cole

## Description
This assignment implements a Node.js course lookup application.

Part 1 uses a custom course module to read course information from a JSON file and provides functions for:
- Searching courses by course ID
- Searching courses by course name
- Returning a random course

Part 2 implements a client/server application using the Node.js net module. The client sends course lookup commands to the server, and the server processes the requests using the course module.

---

## Requirements

Node.js must be installed.

To verify Node.js is installed, run:


node -v


---

# Part 1: Course Module Application

## Files Used
- courseModule.js
- part1.js
- cs_courses.json

## How to Run

Open a terminal in the project folder:


CS602_HW1_Johnson_Cole


Run:


node part1.js


## Expected Behavior

The program will:
1. Read the course data from cs_courses.json
2. Perform course ID lookups
3. Perform course name lookups
4. Display two random courses

The output will display the matching course objects.

---

# Part 2: Client/Server Application

## Files Used
- part2_server.js
- part2_client.js
- courseModule.js
- cs_courses.json

The server must be started before running the client.

---

## Step 1: Start the Server

Open the first terminal window.

Run:


node part2_server.js


Expected output:


Read 77 courses
Listening for connections on port 3000


Keep this terminal open.

---

## Step 2: Start the Client

Open a second terminal window.

Run:


node part2_client.js


Expected output:


Connected to server
Enter Command:


---

## Client Commands

Search by course ID:


lookupByCourseId,CS 602


Search using a course ID pattern:


lookupByCourseId,^CS 2


Search by course name:


lookupByCourseName,Web


Get a random course:


getRandomCourse


Exit the client:


bye


---

## Additional Test Cases Used

Additional course ID lookups:


lookupByCourseId,CS 601
lookupByCourseId,^CS 5


Additional course name lookups:


lookupByCourseName,Data
lookupByCourseName,Programming


---

## Author

Cole Johnson
MET CS602 - Server-Side Web Development