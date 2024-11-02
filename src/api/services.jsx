// src/api/backendService.js
import api from './axios';

export const getWhyChooseUs = async () => {
  try {
    const response = await api.get('/api/why-choose-us/');
    return response.data;
  } catch (error) {
    console.error("Error fetching 'Why Choose Us' data:", error);
    throw error;
  }
};

export const getOffers = async () => {
  try {
    const response = await api.get('/api/offers/');
    return response.data;
  } catch (error) {
    console.error("Error fetching offers:", error);
    throw error;
  }
};

export const getServices = async () => {
  try {
    const response = await api.get('/api/services/');
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

export const getComments = async () => {
  try {
    const response = await api.get('/api/comments/');
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const getDevelopmentInfo = async () => {
    try{
        const response = await api.get('/api/development-info');
        return response.data;
    }catch(error){
        console.error("Error fetching development information");
        throw error;
    }
}

export const getVpsInfo = async ()=>{
    try{
        const response = await api.get('/api/vps-info');
        return response.data;
    }catch(error){
        console.error("Error gettin vps information");
        throw error;
    }
}

export const getDedicatedServers=async()=>{
    try{
        const response  = await api.get("/api/dedicated-servers");
        return response.data;
    }catch(error){
        console.error("Error fetchin dedicated servers");
        throw error;
    }
}

export const getHostingPlans = async () => {
    try{
        const response = await api.get("/api/hosting-plans");
        return response.data;
    }catch(error){
        console.error("Error fetching hosting plans");
        throw error;
    }
}

export const getContactInfo = async () => {
    try{
        const response = await api.get("/api/contact-info");
        return response.data;
    } catch(error){
        console.error("Error while fetching contact information")
        throw error
    }
}