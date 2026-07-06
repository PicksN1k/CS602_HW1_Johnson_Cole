import net from 'node:net';

import * as courseDB from './courseModule.js';

const server = net.createServer((socket) => {
	console.log("Client connection...");

	socket.on('end', () => {
		console.log("Client disconnected...");
	});

	// process data from client
	socket.on('data', (data) => {
		let input = data.toString();
		console.log('...Received', input);
		let result = "";
		// fill the code

		let command = input.trim().split(",");

		if (command[0] === "lookupByCourseId") {
			result = courseDB.lookupByCourseId(command[1]);
		}
		else if (command[0] === "lookupByCourseName") {
			result = courseDB.lookupByCourseName(command[1]);
		}
		else if (command[0] === "getRandomCourse") {
			result = courseDB.getRandomCourse();
		}
		else {
			result = "Invalid Command";
		}

		socket.write(JSON.stringify(result));
	});

});

// listen for client connections
server.listen(3000, () => {
	console.log("Listening for connections on port 3000");
});
