import { Button } from '@mui/material';

const StyledButton = ({ color = '#8a2be2', children, ...props }) => {
  return (
    <Button
      color="inherit"
      sx={{
        textTransform: props.textTransform || 'uppercase',
        fontWeight: 'bold',
        fontSize: '1rem',
        padding: '6px 12px',
        borderRadius: 2,
        transition: 'all 0.3s ease',
        fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
        color: color,
        '&:hover': {
          color: '#ff9800',
          transform: 'translateY(-2px)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
