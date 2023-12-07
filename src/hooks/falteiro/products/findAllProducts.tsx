'use client';

import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { MyContext } from '../../../context/MyContext';

interface Data {
  id: string;
  amount: number;
  locality: string;
  entryDate: Date;
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
  }[];
  catalog: {
    id: string;
    name: string;
    barCode: string;
  };
}

type findAllProducts = {
  data: Data[];
  isLoading: boolean;
  error: string | null;
};

export const findAllProducts = () => {
  const [data, setData] = useState<Data[]>([]);
  const { myState } = useContext(MyContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data[]>(
          'http://localhost:8080/api/products',
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [myState]);

  return data;
};
