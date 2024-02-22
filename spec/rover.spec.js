const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function () {
    let testRover = new Rover(500);
    expect(testRover.position).toBe(500);
    expect(testRover.mode).toBe('NORMAL');
    expect(testRover.generatorWatts).toBe(110);
  });

  it("response returned by recieveMessage contains the name of the message", function () {
    let testRover = new Rover(500);
    let commands = [new Command('MOVE', 3000), new Command('STATUS_CHECK')];
    let testResponse = testRover.recieveMessage(new Message('test', commands));
    expect(testResponse.message).toBe('test'); 
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    let commands = [new Command('MOVE', 3000), new Command('STATUS_CHECK')];
    let message = new Message('Test', commands);
    let rover = new Rover(500);
    let testResponse = rover.recieveMessage(message);
    expect(testResponse.results.length).toEqual(2);
  });

  // it("responds correctly to the status check command", function () {

  // })

});
