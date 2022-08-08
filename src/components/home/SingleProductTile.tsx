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
    <Card
      sx={{
        maxWidth: { xs: 250 },
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
              component="div"
              sx={{ textAlign: 'center' }}
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
  );
};

export default SingleProductTile;
