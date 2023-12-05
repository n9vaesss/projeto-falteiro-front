import EnhancedTable from '../../components/tableProducts/EnhancedTable';
import Drawer from '../../components/header/Drawer';
export default function Home() {
  return (
    <div className="container m-auto">
      <Drawer>
        <EnhancedTable />
      </Drawer>
    </div>
  );
}
