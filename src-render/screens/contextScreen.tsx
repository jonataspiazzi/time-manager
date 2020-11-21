import React from 'react';
import { PomodoroProvider } from '../providers/pomodoroProvider';
import ContextMenu from '../components/contextMenu';

export default function ContextScreen() {
  return (
    <PomodoroProvider>
      <ContextMenu />
    </PomodoroProvider>
  )
}