import Command from './Command';

class PlaceCommand extends Command {
  static expression = /PLACE/i;

  constructor(instruction){
    super();
    let coords = instruction.split(' ')[1].split(',');
    this.coordinates = { x: coords[0], y: coords[1], o: coords[2] };
  };

  execute(robot) {
    robot.place(this.coordinates);
  }
}

export default PlaceCommand;
