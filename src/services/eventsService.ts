import { events } from "../../data/events"
import { featureEvents } from "../../data/featureEvents"
import { upcomingEvents } from "../../data/upcomingEvents"
import api from "./api"

// 
// esse service simula o consumo dos dados das rotas da API
// 

// modelo de função consumindo a API
export const getUpComingEventsTeste = async () =>{
  return await api.get(
    `/events/upcoming-events`,
  );
}

export const getUpComingEvents = () =>{
  return upcomingEvents
}

export const getEvents = () =>{
  return events
}

export const getFeaturedEvents = () =>{
  return featureEvents
}
