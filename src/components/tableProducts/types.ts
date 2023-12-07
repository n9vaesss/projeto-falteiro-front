export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Data {
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

export type Order = 'asc' | 'desc';

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
}
