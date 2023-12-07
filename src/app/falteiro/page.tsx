'use client';

import * as React from 'react';
import EnhancedTable from '../../components/tableProducts/EnhancedTable';
import Drawer from '../../components/drawer/Drawer';
import SplitButton from '../../components/splitButton/SplitButton';
import { MyContext } from '../../context/MyContext';
import RegisterNewProduct from '../../components/registerNewProduct/registerNewProduct';

export default function Home() {
  const { pageSelectedFalteiro } = React.useContext(MyContext);
  return (
    <div className="container m-auto">
      <Drawer title={'Falteiro'}>
        <SplitButton />
        {pageSelectedFalteiro === 'Relatorio de items' ? (
          <EnhancedTable />
        ) : pageSelectedFalteiro === 'Inserção de items' ? (
          <RegisterNewProduct />
        ) : (
          <EnhancedTable />
        )}
      </Drawer>
    </div>
  );
}
