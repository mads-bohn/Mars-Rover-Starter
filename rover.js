const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   constructor (position, mode='NORMAL', generatorWatts=110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }

   recieveMessage(message) {
      let resultsObject = {
         message: message.name,
         results: []
      };

      for (let i = 0; i < message.commands.length; i++) {
      
         if (message.commands[i].commandType == "STATUS_CHECK") {
            //push roverStatus object and completed:true to resultsobject.results
            let currentRoverStatus = {
               mode: this.mode,
               generatorWatts: this.generatorWatts,
               position: this.position
            };
            let statusMessage = {
               completed: true,
               roverStatus: currentRoverStatus
            };
            resultsObject.results.push(statusMessage);
         } else if (message.commands[i].commandType == "MODE_CHANGE") {
            this.mode = message.commands[i].value;
            resultsObject.results.push({completed: true});
         }
         // if message.commands[i] is move while in low power, replace with completed:false
         // if message.commands[i] is move while in normal mode, replace with completed:true
      }

      return resultsObject;
   };
      
}
 
module.exports = Rover;




