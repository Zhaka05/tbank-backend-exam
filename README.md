# In-Memory Cache API

Welcome to JSONPlaceholder Cache API! This API provides a way to cache data retrieved from the JSONPlaceholder API. It supports fetching, updating, and managing cache entries, allowing efficient access to frequently requested data.

## 📚 Features

- Cache Data by ID: Retrieve and update cached data using unique IDs.
- Manage Cache Size: Configure the maximum size of the cache.
- Clear Cache: Remove all cached data with a single command.
- Swagger Documentation: Interactive API documentation for easy testing and understanding.

The server will start and listen on http://localhost:3000.

## API Endpoints

__Welcome Page__
- `GET / : Displays`: welcome message and a link to the API documentation.

__Cache Operations__
- `GET /api/items/{id}`: Retrieve item from cache by ID.

- `PUT /api/items/{id}`: Update an item in the cache by ID.

- `DELETE /api/cache`: Clear all cached data.

- `PUT /api/cache-size`: Set the maximum size of the cache.



## Swagger Documentation

Api documentation: http://localhost:3000/docs
