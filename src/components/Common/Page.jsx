import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';

Page.propTypes = {
  title: PropTypes.string.isRequired,
};

export function Page({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 4 }}>
      {children}
    </Container>
  );
}
