const cacheService = require('../services/cacheService');

const getData = async (req, res) => {
    const { id } = req.params;
    const cachedData = cacheService.getFromCache(id);
    if (cachedData) {
        return res.json(cachedData);
    }

    try {
        const apiResponse = await cacheService.fetchDataFromApi(id);
        res.json(apiResponse);
    } catch (error) {
        res.status(404).json({ error: 'Not Found' });
    }
};

const updateItem = async (req, res) => {
    const { id } = req.params;
    const newItemData = req.body;

    const cachedData = cacheService.getFromCache(id);

    if (cachedData) {
        const updatedItem = { ...cachedData, ...newItemData };
        cacheService.set(id, updatedItem);
        return res.json(updatedItem);
    }

    res.status(404).json({ error: 'Item not found in cache' });
};

const deleteCache = (req, res) => {
    cacheService.clearCache();
    res.sendStatus(200);
};

const putCacheSize = (req, res) => {
    const { size } = req.body;
    cacheService.setCacheSize(size);
    res.sendStatus(200);
};

module.exports = {
    getData,
    updateItem,
    deleteCache,
    putCacheSize,
};
