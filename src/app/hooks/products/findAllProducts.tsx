'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Data {
  id: string;
  name: string;
  barCode: string;
  amount: number;
  locality: string;
  entryDate: Date;
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
  }[];
}

type findAllProducts = {
  data: Data[];
  isLoading: boolean;
  error: string | null;
};

export const findAllProducts = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data[]>(
          'http://localhost:8080/api/products',
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};
