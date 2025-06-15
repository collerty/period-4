import axios from 'axios';
import { LENSO_ACCESS_TOKEN, LENSO_API_URL } from '../constants/lenso';

export const useLensoSearch = () => {
  const searchSimilar = async (base64Image: string) => {
    try {
      const response = await axios.post(
        LENSO_API_URL,
        {
          image: base64Image,
          category: 'similar',
          sortType: 'QUALITY_DESCENDING',
          domain: '',
          page: 1
        },
        {
          headers: {
            Authorization: `Bearer ${LENSO_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Lenso API call failed:', error);
      throw error;
    }
  };

  return { searchSimilar };
};
