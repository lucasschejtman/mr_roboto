import Command from './Command';

class RightCommand extends Command {
  static expression = /RIGHT/i;

  execute(robot) {
    robot.right();
  }
}

export default RightCommand;
