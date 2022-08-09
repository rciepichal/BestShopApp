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

type Props = { product: Product; isOnSale: boolean };

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

const SingleProductTile = ({ product, isOnSale }: Props) => {
  const { id, title, image } = product;

  return (
    <Box sx={{ paddingTop: { xs: 3 } }}>
      <Card
        sx={{
          maxWidth: { xs: 300, md: 250, lg: 300 },
        }}
        elevation={5}
      >
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
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '1rem', lg: '1.2rem' },
                }}
              >
                {title}
              </Typography>
              {/* <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: 'center' }}
            >
              {description}
            </Typography> */}
            </CardContent>
          </CardActionArea>
        </Badge>
      </Card>
    </Box>
  );
};

export default SingleProductTile;
