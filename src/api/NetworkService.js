/**
 * @fileoverview
 * NetworkService is an abstraction designed to provide
 * HTTP request handling using the async/await pattern
 */
class NetworkService {
  constructor(baseEndpoint) {
    this._baseEndpoint = baseEndpoint;
  };

  /**
   * Internal helper for NetworkService
   * @param {string} route
   * @param {{ method: string, headers: Headers, body: string }} params
   */
  rawRequest_ = async (route, params) => {
    try {
      const raw = await fetch(
        `${this._baseEndpoint}${route}`,
        params
      );
      const json = await raw.json();
      return { success: true, response: json };
    } catch (err) {
      return { success: false, errors: err };
    }
  };


  /**
   * Performs a GET request to specified endpoints and parses it as JSON.
   * @param {string} endpoint
   * @param {Object=} headers
   * @returns {Promise<Object>}
   */
  get = async (endpoint, headers) => {
    const params = {
      method: 'GET',
      headers: headers || new Headers(),
    };
    return await this.rawRequest_(endpoint, params);
  };

  /**
   * Performs a POST request to specified endpoints and parses it as JSON.
   * @param {string} endpoint
   * @param {Object=} headers
   * @param {Object=} body
   * @returns {Promise<Object>}
   */
  post = async (endpoint, headers, body = {}) => {
    const params = {
      method: 'POST',
      headers: headers || new Headers(),
      body: typeof body === 'object' ? JSON.stringify(body) : body,
    };
    return await this.rawRequest_(endpoint, params);
  };

}

const NetworkServiceAPI = new NetworkService(
  process.env.REACT_APP_API_BASE || 'http://localhost:3001'
);
export default NetworkServiceAPI;
