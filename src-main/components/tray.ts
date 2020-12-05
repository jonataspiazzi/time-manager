import { app, Menu, Tray } from "electron";
import { showMainWindow } from "./main";

let tray: Tray | null = null;

function onShowConfiguration() {
  showMainWindow();
}

function onClose() {
  closeTray();
  app.exit();
}

export function showTray() {
  tray = new Tray('public/favicon.ico');

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Configure', type: 'normal', click: onShowConfiguration },
    { label: '', type: 'separator' },
    { label: 'Close', type: 'normal', click: onClose }
  ]);

  tray.setTitle('Time Manager');
  tray.setToolTip('Time Manager');
  tray.setContextMenu(contextMenu);
}

export function closeTray() {
  tray?.destroy();
  tray = null;
}

export function getTray() {
  return tray;
}