import React from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Wrapper = styled('section')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '15px',
  alignItems: 'center',
}));

export default function AppCard({ alt, src, title, type, id }) {
  const history = useHistory();

  return (
    <Wrapper>
      <Card>
        <CardActionArea onClick={ () => history.push(`/${type}/${id}`) }>
          <CardMedia
            component="img"
            image={ src }
            alt={ alt }
          />
          <CardContent>
            <Typography variant="h5" component="div">
              { title }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
    // <li data-testid={ testIdRecipeCard }>
    //   <Link to={ `/${type}/${id}` }>
    //     <img
    //       data-testid={ testIdcardImg }
    //       alt={ alt }
    //       src={ src }
    //     />
    //     <span data-testid={ testIdTitle }>
    //       { title }
    //     </span>
    //   </Link>
    // </li>
  );
}

AppCard.propTypes = {
  testIdRecipeCard: propTypes.string,
  testIdcardImg: propTypes.string,
  alt: propTypes.string,
  src: propTypes.string,
  testIdTitle: propTypes.string,
  title: propTypes.string,
  type: propTypes.string,
  id: propTypes.string,
}.isRequired;
