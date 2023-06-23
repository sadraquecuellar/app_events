import { events } from "../../data/events"
import { featureEvents } from "../../data/featureEvents"
import { upcomingEvents } from "../../data/upcomingEvents"

// 
// esse service simula o consumo dos dados das rotas da API
// 

export const getUpComingEvents = () =>{
  return upcomingEvents
}

export const getEvents = () =>{
  return events
}

export const getFeaturedEvents = () =>{
  return featureEvents
}