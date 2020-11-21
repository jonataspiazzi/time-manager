import React, { createContext, FunctionComponent } from 'react';
import { makeAutoObservable } from 'mobx';
import { useLocalObservable } from 'mobx-react';
import { Pomodoro } from '../core/pomodoro';

export const PomodoroContext = createContext<Pomodoro>(null);

export const PomodoroProvider: FunctionComponent = ({ children }) => {
  const store = useLocalObservable(() => {
    const store = new Pomodoro();
    makeAutoObservable(store);
    return store;
  })

  return <PomodoroContext.Provider value={store}>{children}</PomodoroContext.Provider>
}
