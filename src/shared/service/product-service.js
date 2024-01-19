import axios from 'axios';
import config from '../../config/config';

const BASE_URL = config.baseUrl;

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductByCategory = async (category) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/category/${category}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductByLimit = async (value) => {
    try {
        const response = await axios.get(`${BASE_URL}/products?limit=${value}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};