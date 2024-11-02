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
        throw error
    }
}