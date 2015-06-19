import Command from './Command';

class ReportCommand extends Command {
  static expression = /REPORT/i;

  execute(robot) {
    robot.report();
  }
}

export default ReportCommand;
