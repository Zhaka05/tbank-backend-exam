const axios = require('axios');
const InMemoryCache = require('../models/cacheModel');
const cache = new InMemoryCache();

const fetchDataFromApi = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    try {
        const response = await axios.get(url);
        const data = response.data;
        cache.set(id, data); // Add data to cache when fetched
        return data;
    } catch (error) {
        throw new Error('Not Found');
    }
};

const getFromCache = (key) => cache.get(key);
const clearCache = () => cache.clear();
const setCacheSize = (size) => cache.setSize(size);

module.exports = {
    getFromCache,
    clearCache,
    setCacheSize,
    fetchDataFromApi,
};
