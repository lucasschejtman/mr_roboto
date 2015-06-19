import Command from './Command';

class LeftCommand extends Command {
  static expression = /LEFT/i;

  execute(robot) {
    robot.left();
  }
}

export default LeftCommand;
