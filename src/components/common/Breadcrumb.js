import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { capitalize } from 'lodash';

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link
          underline="hover"
          color="inherit"
          to="/"
          style={{ textDecoration: 'none', color: '#202020' }}
        >
          Dashboard
        </Link>
      ) : (
        <Typography
          underline="hover"
          style={{ color: '#737373' }}
        >
          Dashboard
        </Typography>
      )}

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const capitalizedName = capitalize(name);
        return index === pathnames.length - 1 ? (
          <Typography
            color="textPrimary"
            key={capitalizedName}
            style={{ color: '#737373' }}
          >
            {capitalizedName}
          </Typography>
        ) : (
          <Link
            color="inherit"
            to={routeTo}
            key={capitalizedName}
            style={{ textDecoration: 'none', color: '#202020' }}
          >
            {capitalizedName}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
