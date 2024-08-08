// API SERVICES

import { apiClient } from '../utils/api/apiClient';

export const fetchCategories = async () => {
  try {
    const res = await apiClient.get('/products/categories');
    return res;
  } catch (error) {
    /* Add additional catch if needed */
  }
};

export const fetchProducts = async (limit: number) => {
  try {
    const res = await apiClient.get(`/products?limit=${limit}`);
    return res;
  } catch (error) {
    /** Add additional error cacth if needed */
  }
};
