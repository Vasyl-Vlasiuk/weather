import { useCallback } from "react";
import axios from 'axios';

export const useHttp = () => {
  const request = useCallback(async (url, method = 'GET', body = null, headers) => {
    try {
      const response = await axios({url, method, data: body, headers});

      const data = response.data;
      return data;
    } catch(e) {
      throw e;
    }
  }, []);

  return {request}
}
