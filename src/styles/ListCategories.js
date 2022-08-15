import { styled } from '@mui/material/styles';

export const ListCategories = styled('section')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '70px',
  alignItems: 'center',
  justifyContent: 'space-around',
  button: {
    margin: '10px',
  },
}));

export default ListCategories;
