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
    right: '23px',
    top: '23px',
    borderRadius: '0',
    height: '50px',
    width: '50px',
    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
    userSelect: 'none',
  },
};

const SingleProductTile = ({ product, isOnSale, isProductPage }: Props) => {
  const { id, title, image, price, description, category } = product;

  return (
    <Box sx={{ paddingTop: { xs: 3 }, maxHeight: '17rem' }}>
      <Card
        sx={{
          maxWidth: { xs: 300, md: 250, lg: 300 },
          position: 'relative',
        }}
        elevation={5}
      >
        {isProductPage &&
          (isOnSale ? (
            <div>
              <Typography
                gutterBottom
                variant="body2"
                component="span"
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '0.9rem', lg: '1.1rem' },
                  position: 'absolute',
                  bottom: '60%',
                  right: '10%',
                  textDecoration: 'line-through',
                }}
              >
                ${price}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="span"
                color="primary"
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '1.1rem', lg: '1.3rem' },
                  position: 'absolute',
                  bottom: '50%',
                  right: '10%',
                }}
              >
                ${Math.ceil(price - price * 0.15)}
              </Typography>
            </div>
          ) : (
            <Typography
              gutterBottom
              variant="body2"
              component="span"
              sx={{
                textAlign: 'center',
                fontSize: { xs: '1rem', lg: '1.2rem' },
                position: 'absolute',
                bottom: '60%',
                right: '10%',
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              ${!price ? 'Contact us' : price}
            </Typography>
          ))}
        {isProductPage && <CategoryBadge category={category}></CategoryBadge>}
        <Badge
          color="primary"
          badgeContent={''}
          invisible={!isOnSale}
          sx={badgeStyle}
        >
          <CardActionArea href={`/products/${id}`}>
            <CardMedia
              component="img"
              height="130"
              image={image}
              alt={title}
              sx={{ objectFit: 'contain', paddingTop: 2 }}
            ></CardMedia>

            <CardContent>
              <Box>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  sx={{
                    textAlign: 'center',
                    fontSize: { xs: '1rem', lg: '1.2rem' },
                    marginTop: isProductPage ? '0.7rem' : '0',
                  }}
                >
                  {isProductPage ? title.substring(0, 20) : title}
                </Typography>
              </Box>
              {isProductPage && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: 'center' }}
                >
                  {description.substring(0, 90)}...
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Badge>
      </Card>
    </Box>
  );
};

export default SingleProductTile;
