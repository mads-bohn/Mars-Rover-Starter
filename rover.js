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
         // if message.commands[i] is status check, replace with completed:true and roverstatus object
         // if message.commands[i] is mode change, update mode and push completed:true
         if (message.commands[i].commandType == "MODE_CHANGE") {
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




