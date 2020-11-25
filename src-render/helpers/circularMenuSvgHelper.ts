import svg from '../assets/circular-menu.svg';
import { PomodoroCycle } from '../../src-main/ipcMaps/pomodoro';
import { CircularMenuPomodoroAngles } from './circularMenuPomodoroAngles';

const angles = new CircularMenuPomodoroAngles();

export type CircularMenuButton = 'pomodoro-bar' | 'pomodoro-pause' | 'pomodoro-p1' | 'pomodoro-p2' | 'pomodoro-p3' | 'pomodoro-p4' | 'pomodoro-b4';
export type CircularMenuSvgElementName = 'root' | 'center' | CircularMenuButton;
export const elementButtons: CircularMenuButton[] = ['pomodoro-b4', 'pomodoro-bar', 'pomodoro-p1', 'pomodoro-p2', 'pomodoro-p3', 'pomodoro-p4', 'pomodoro-pause'];

export class CircularMenuSvgHelper {
  private element: HTMLDivElement;

  async load() {
    const req = await fetch(svg);
    return await req.text();
  }

  setElement(element: HTMLDivElement) {
    this.element = element;

    this.fixTransformOrigin();
  }

  getElement(name: CircularMenuSvgElementName) {
    return this.element?.querySelector(this.getElementQuery(name)) as SVGElement;
  }

  setPomodoroProgress(cycle: PomodoroCycle, currentTime: number, duration: number) {
    const pomodoroBar = this.getElement('pomodoro-bar');
    if (!pomodoroBar) return;

    const angle = angles.calculateAngle(cycle, currentTime, duration);
    const rotation = `rotate(${angle}deg)`;
    pomodoroBar.style.transform = rotation;
  }

  private getElementQuery(name: CircularMenuSvgElementName) {
    switch (name) {
      case 'root': return 'svg';
      case 'center': return 'svg #helpers #center';
      case 'pomodoro-bar': return 'svg #ruler #progress #bar';
      case 'pomodoro-pause': return 'svg #pomodoro>[id^=button]>[id^=children]>[id^=pause]';
      case 'pomodoro-p1': return 'svg #pomodoro>[id^=button]>[id^=children]>[id^=p1]>[id^=button]>[id^=children]>[id^=button]';
      case 'pomodoro-p2': return 'svg #pomodoro>[id^=button]>[id^=children]>[id^=p2]>[id^=button]>[id^=children]>[id^=button]';
      case 'pomodoro-p3': return 'svg #pomodoro>[id^=button]>[id^=children]>[id^=p3]>[id^=button]>[id^=children]>[id^=button]';
      case 'pomodoro-p4': return 'svg #pomodoro>[id^=button]>[id^=children]>[id^=p4]>[id^=button]>[id^=children]>[id^=button]';
      case 'pomodoro-b4': return 'svg #pomodoro>[id^=button]>[id^=children]>[id^=b4]>[id^=button]>[id^=children]>[id^=button]';
      default: return '#none';
    }
  }

  private getTransformOrigin() {
    const centerTag = this.getElement('center') as SVGRectElement;

    const x = Number(centerTag?.x.baseVal.value);
    const y = Number(centerTag?.y.baseVal.value);

    if (isNaN(x)) return null;
    if (isNaN(y)) return null;

    const root = this.getElement('root') as SVGSVGElement;
    const viewBox = root?.viewBox?.baseVal;
    if (!viewBox) return null;

    const { width, height } = viewBox;

    return `${(100 * x / width).toPrecision(6)}% ${(100 * y / height).toPrecision(6)}%`;
  }

  private fixTransformOrigin() {
    const transformOrigin = this.getTransformOrigin();
    const pomodoroBar = this.getElement('pomodoro-bar');

    if (!transformOrigin) return;
    if (pomodoroBar) {
      pomodoroBar.style.transformOrigin = transformOrigin;
    }
  }
}