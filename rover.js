const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   constructor (position, mode='NORMAL', generatorWatts=110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }

   recieveMessage(message) {
      console.log(message.commands);
      let resultsObject = {
         message: message.name,
         results: []
      };
      for (let i = 0; i < message.commands.length; i++) {
         if (message.commands[i] == "STATUS_CHECK") {
            //push a roverStatus object to results with mode, watts, and position
         }
      }
      return resultsObject;
   }
}
module.exports = Rover;




