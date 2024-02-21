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
      return resultsObject;
   }
}
module.exports = Rover;