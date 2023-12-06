'use client';

import EnhancedTable from '../../components/tableProducts/EnhancedTable';
import Drawer from '../../components/drawer/Drawer';

export default function Home() {
  return (
    <div className="container m-auto">
      <Drawer title={'Falteiro'}>
        <EnhancedTable />
      </Drawer>
    </div>
  );
}
