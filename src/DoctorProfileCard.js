import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function DoctorProfileCard(props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height= 'auto'
          image= {props.dp}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
