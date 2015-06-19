import Command from './Command';

class MoveCommand extends Command {
  static expression = /MOVE/i;

  execute(robot) {
    robot.move();
  }
}

export default MoveCommand;
