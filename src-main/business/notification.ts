import { playAudio } from '../components/windows/audioPlayer';
import { showScreenLock } from '../components/windows/screenLock';
import { NotificationInfo, AudioTrigger } from '../bridge/infos/notification';

export class Notification implements NotificationInfo {
  /**
   * Enables a notification
   */
  enabled: boolean;

  /**
   * Play a sound or music to notify this event.
   */
  playAudio: boolean;

  /**
   * The audio file to be played.
   */
  audioFilename: string;

  /**
   * Determines where the audio should be played.  
   * `begin`: Play at the begin of the cycle.  
   * `end`: Play at the end of the cycle.
   */
  audioTrigger: AudioTrigger;

  /**
   * Use a screen lock as a notification.
   */
  useScreenLock: boolean;

  /**
   * The image file to be used as a screen lock.
   */
  screenLockFilename: string;

  /**
   * Determines if the next cicle should start imediatly after the end of the current cycle or should wait the screen lock to be closed.
   */
  waitScreenLockClosed: boolean;

  /**
   * Creates a basic notification system.
   */
  constructor(audioFilename: string, screenLockFilename: string) {
    this.playAudio = !!audioFilename;
    this.audioFilename = audioFilename;
    this.audioTrigger = 'begin';
    this.useScreenLock = !!screenLockFilename;
    this.screenLockFilename = screenLockFilename;
    this.waitScreenLockClosed = true;
    this.enabled = this.playAudio || this.useScreenLock;
  }

  update(info: NotificationInfo) {
    this.enabled = info.enabled;
    this.playAudio = info.playAudio;
    this.audioFilename = info.audioFilename;
    this.audioTrigger = info.audioTrigger;
    this.useScreenLock = info.useScreenLock;
    this.screenLockFilename = info.screenLockFilename;
    this.waitScreenLockClosed = info.waitScreenLockClosed;
  }

  triggerBegin() {
    if (!this.enabled) return;

    if (this.playAudio && this.audioTrigger == 'begin') {
      playAudio(this.audioFilename);
    }

    if (this.useScreenLock) {
      showScreenLock(this.screenLockFilename);
    }
  }

  triggerEnd() {
    if (!this.enabled) return;

    if (this.playAudio && this.audioTrigger === 'end') {
      playAudio(this.audioFilename);
    }
  }

  getInfo() {
    return JSON.parse(JSON.stringify(this)) as NotificationInfo;
  }
}