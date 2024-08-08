import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Error handle
 * @link https://medium.com/@info_65725/best-practices-for-using-axios-to-make-http-requests-to-a-spring-backend-in-a-react-application-f20d52ef41d3
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Failed to fetch API');
    if (error.response.status === 404) {
      console.error('Endpoint NOT FOUND', error);
    } else if (error.response.status === 401) {
      console.error('Unauthorized', error);
    }

    return Promise.reject(error);
  }
);
