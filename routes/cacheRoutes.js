const express = require('express');
const router = express.Router();
const cacheController = require('../controllers/cacheController');

/**
 * @openapi
 * /data/{id}:
 *   get:
 *     summary: Get data from JSONPlaceholder with caching by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the data to fetch from JSONPlaceholder
 *         schema:
 *           type: string
 *           example: 1
 *     responses:
 *       '200':
 *         description: Successful response with cached or fresh data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '404':
 *         description: Data not found
 */
router.get('/data/:id', cacheController.getData);


/**
 * @openapi
 * /data/{id}:
 *   put:
 *     summary: Update item in cache by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the item to update in cache
 *         schema:
 *           type: string
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               body:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Cache updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '404':
 *         description: Item not found in cache
 */
 router.put('/data/:id', cacheController.updateItem);

/**
 * @openapi
 * /cache:
 *   delete:
 *     summary: Clear the cache
 *     responses:
 *       '200':
 *         description: Cache cleared successfully
 */
router.delete('/cache', cacheController.deleteCache);

/**
 * @openapi
 * /cache-size:
 *   put:
 *     summary: Set cache size
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               size:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Cache size updated successfully
 */
router.put('/cache-size', cacheController.putCacheSize);

module.exports = router;
