import { Notifiable, Field } from './observable';

interface TimeSegment {
  start: number;
  stop: number;
}

interface PomodoroSegments {
  p1: TimeSegment;
  p2: TimeSegment;
  p3: TimeSegment;
  p4: TimeSegment;
  [index: number]: TimeSegment;
}

interface BreakSegments {
  s1: TimeSegment;
  s2: TimeSegment;
  s3: TimeSegment;
  s4: TimeSegment;
  [index: number]: TimeSegment;
}

const pomodoroSegments = {} as PomodoroSegments;
pomodoroSegments.p1 = pomodoroSegments[0] = { start: 0.00, stop: .186 };
pomodoroSegments.p2 = pomodoroSegments[1] = { start: .238, stop: .386 };
pomodoroSegments.p3 = pomodoroSegments[2] = { start: .438, stop: .586 };
pomodoroSegments.p4 = pomodoroSegments[3] = { start: .639, stop: .788 };

const breakSegments = {} as BreakSegments;
breakSegments.s1 = breakSegments[0] = { start: .198, stop: .226 };
breakSegments.s2 = breakSegments[1] = { start: .398, stop: .426 };
breakSegments.s3 = breakSegments[2] = { start: .600, stop: .626 };
breakSegments.s4 = breakSegments[3] = { start: .799, stop: 1.00 };

@Notifiable()
export class Pomodoro {

  @Field() enabled: Boolean;

  constructor() {
  }
}



//- **Enabled** `(boolean)`: Enables or disables this feature.
//
//- **Pomodoro** `(number)`: Time in minutes of a dedicated activity.
//
//- **Short Break** `(number)`: Time in minutes of a short break.
//
//- **Long Break** `(number)`: Time in minutes of a long break.
//
//- **Current Cycle** `(number)`: Number of the current cycle of pomodoro.
//
//- **Enable Audio** `(boolean)`: Defines if an audio should play at the end of a cycle
//
//- **Audio File** `(string)`: Audio file to play at the end of a cycle.
//
//- **Enable Screen Lock** `(boolean)`: Defines if an should lock all screens (with an image) at the end of a cycle.
//
//- **Screen Lock Image** `(string)`: An image to be display on screen lock.
//
//**Actions:**
//
//- **Start Pomodoro**: Starts pomodoro.
//
//- **Start Short Break**: Starts short break.
//
//- **Start Long Break**: Starts long break.
//
//- **Stop**: Stop the current cycle.
//
//- **Reset**: Stop + Start current cycle.