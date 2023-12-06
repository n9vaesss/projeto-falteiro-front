'use client';

import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';
import { alpha } from '@mui/material/styles';
import { useDeleteProducts } from '../../hooks/falteiro/products/deleteProducts';

const EnhancedTableToolbar = ({ numSelected, property }) => {
  const { isLoading, deleteProducts } = useDeleteProducts();
  const [selectedCount, setSelectedCount] = React.useState(numSelected);

  const handleDelete = () => {
    deleteProducts({ ids: property });
    setSelectedCount(0); // Reseta o valor ao clicar em deletar
  };

  React.useEffect(() => {
    // Atualiza o estado local quando o valor de numSelected muda
    setSelectedCount(numSelected);
  }, [numSelected]);

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      {selectedCount > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {selectedCount} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Products
        </Typography>
      )}
      {selectedCount > 0 ? (
        <div className="flex">
          <Tooltip title="Delete" onClick={handleDelete} disabled={isLoading}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {selectedCount === 1 ? (
            <Tooltip title="Edit">
              <IconButton>
                <EditIcon />
              </IconButton>
            </Tooltip>
          ) : null}
        </div>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
