import LeftCommand from './Commands/LeftCommand';
import RightCommand from './Commands/RightCommand';
import MoveCommand from './Commands/MoveCommand';
import PlaceCommand from './Commands/PlaceCommand';
import ReportCommand from './Commands/ReportCommand';

class Commander {
  constructor(sequence) {
    this.commands = [ LeftCommand, RightCommand, MoveCommand, PlaceCommand, ReportCommand ];
    this.sequence = this.parseSequence(sequence);
  };

  parseSequence(sequence) {
    return sequence.map(step => {
      var Command = this.commands.find(cmd => {
        return cmd.expression.exec(step) !== null;
      });
      return new Command(step);
    });
  };
}

export default Commander;
