import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Badge,
} from '@mui/material';
import { Product } from '../../shared/models';

type Props = { product: Product; isOnSale: boolean };

const badgeStyle = {
  '& .MuiBadge-badge': {
    right: '25px',
    top: '25px',
    borderRadius: '0',
    height: '50px',
    width: '50px',
    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
    userSelect: 'none',
  },
};

const SingleProductTile = ({ product, isOnSale }: Props) => {
  const { title, image, price, description } = product;

  return (
    <Card sx={{ maxWidth: 300 }} elevation={5}>
      <Badge
        color="primary"
        badgeContent={''}
        invisible={!isOnSale}
        sx={badgeStyle}
      >
        <CardActionArea href="/">
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
            sx={{ objectFit: 'contain' }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: 'center' }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: 'center' }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Badge>
    </Card>
  );
};

export default SingleProductTile;
