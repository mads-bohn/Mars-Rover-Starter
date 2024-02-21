class Rover {
   constructor (position, mode='NORMAL', generatorWatts=110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   recieveMessage(message) {
      let resultsObject = {
         message: message.name,
         results: message.commands
      };
      return resultsObject;
   }
}
module.exports = Rover;

// let rover = new Rover(100);
//     let commands = [
//        new Command('MOVE', 4321),
//        new Command('STATUS_CHECK'),
//        new Command('MODE_CHANGE', 'LOW_POWER'),
//        new Command('MOVE', 3579),
//        new Command('STATUS_CHECK')
//     ];
//     let message = new Message('TA power', commands);
//     let response = rover.receiveMessage(message);