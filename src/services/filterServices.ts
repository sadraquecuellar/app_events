import { categories } from "../../data/categories"
import { months } from "../../data/months"
import { states } from "../../data/states"
import api from "./api";


// 
// esse service simula o consumo dos dados das rotas da API
// 

// modelo de função consumindo a API
export const getUfsTeste = async () =>{
  return await api.get(
    `/filters/ufs`,
  );
}

export const getUfs = () =>{
  return states
}

export const getMonths = () =>{
  return months
}

export const getCategories = () =>{
  return categories
}
