export const baseURL = 'https://jsonplaceholder.typicode.com/'
const getAPIEndpoint = endpoint => `${baseURL}${endpoint}`
const getAPIUserFilter = userId => (userId ? `?userId=${userId}` : ``)

export const getAPIUrl = (endpoint, userId) => `${getAPIEndpoint(endpoint)}${getAPIUserFilter(userId)}`
