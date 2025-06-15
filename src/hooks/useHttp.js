import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const useHttp = (endpoint, method = 'GET', body = null, trigger = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        switch (method.toUpperCase()) {
          case 'GET':
            response = await axios.get(`${API_BASE_URL}/${endpoint}`);
            break;
          case 'POST':
            response = await axios.post(`${API_BASE_URL}/${endpoint}`, body);
            break;
          case 'PUT':
            response = await axios.put(`${API_BASE_URL}/${endpoint}`, body);
            break;
          case 'DELETE':
            response = await axios.delete(`${API_BASE_URL}/${endpoint}`);
            break;
          default:
            throw new Error('Método HTTP no soportado');
        }
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, JSON.stringify(body), ...trigger]);

  return { data, loading, error };
};