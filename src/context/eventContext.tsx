import React, { createContext, useState, ReactNode } from 'react';
import { EventType } from '../types/EventType';

interface EventContextData {
  event: EventType;
  setEvent: ({}: EventType) => void;
}

export const EventContext = createContext<EventContextData>({
  event: {
    date: '',
    hour: '',
    image: '',
    location: '',
    title: ''
  },
  setEvent: () => {}
});

type EventProviderProps = {
  children: ReactNode
}

export const EventProvider=  ({ children }:EventProviderProps) => {
  const [event, setEvent] = useState<EventType>({} as EventType);

  return (
    <EventContext.Provider
      value={{
        event,
        setEvent
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
