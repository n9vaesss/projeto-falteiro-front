import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { MyContext } from '../../../context/MyContext';
import { toast } from 'react-toastify';

interface DeleteProductsProps {
  ids: string[];
}

type useDeleteProducts = {
  isLoading: boolean;
  error: string | null;
  deleteProducts: (props: DeleteProductsProps) => void;
};

export const useDeleteProducts = (): useDeleteProducts => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { myState, updateState } = useContext(MyContext);

  const deleteProducts = async ({ ids }: DeleteProductsProps) => {
    setIsLoading(true);

    try {
      await Promise.all(
        ids.map(async (id) => {
          await axios.delete(`http://localhost:8080/api/products/${id}`);
          toast.success('Item deletado!');
        }),
      );
    } catch (error) {
      toast.error('Algo de errado!');
      setError('Error deleting products');
    } finally {
      setIsLoading(false);
      updateState(!myState);
    }
  };

  return { isLoading, error, deleteProducts };
};
