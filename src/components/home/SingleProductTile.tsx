import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Badge,
  Box,
} from '@mui/material';
import { Product } from '../../shared/models';
import CategoryBadge from '../products/CategoryBadge';

type Props = { product: Product; isOnSale: boolean; isProductPage?: boolean };

const badgeStyle = {
  '& .MuiBadge-badge': {
    left: '0',
    top: '0',
    borderRadius: '0',
    height: '50px',
    width: '50px',
    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
    userSelect: 'none',
  },
};

const SingleProductTile = ({ product, isOnSale, isProductPage }: Props) => {
  const { id, title, image, price, category } = product;

  return (
    <Box
      sx={{
        paddingTop: { xs: 2, md: 4 },
        transform: {
          xs: `${isProductPage ? 'scale(0.9)' : ''}`,
          lg: 'scale(1)',
        },
      }}
    >
      <Card
        sx={{
          width: { xs: 250, md: 250, lg: 300 },
          position: 'relative',
        }}
        elevation={5}
      >
        {/* {isProductPage && <CategoryBadge category={category}></CategoryBadge>} */}
        <Box
          component={'span'}
          sx={{
            right: '0',
            top: '0',
            borderRadius: '0',
            height: '50px',
            width: '50px',
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
            userSelect: 'none',
            position: 'absolute',
            backgroundColor: '#D40000',
            display: `${isOnSale ? 'block' : 'none'}`,
          }}
        ></Box>

        <CardActionArea
          href={`/products/${id}`}
          sx={{
            height: `${isProductPage ? '18rem' : ''}`,
            display: 'flex',
            flexFlow: 'column nowrap',
          }}
        >
          <CardMedia
            component="img"
            height="130"
            image={image}
            alt={title}
            sx={{ objectFit: 'contain', paddingTop: 2 }}
          ></CardMedia>

          <CardContent>
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'center',
              }}
            >
              {isProductPage && (
                <CategoryBadge category={category}></CategoryBadge>
              )}
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '1rem', lg: '1.1rem' },
                }}
              >
                {title}
              </Typography>
            </Box>
            {isProductPage &&
              (isOnSale ? (
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="span"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    {price.toFixed(2)}$
                  </Typography>
                  <Typography component="span" variant="body1" color="primary">
                    123
                  </Typography>
                </Box>
              ) : (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textAlign: 'center' }}
                >
                  {price.toFixed(2)} $
                </Typography>
              ))}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SingleProductTile;
