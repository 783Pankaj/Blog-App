// import React from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from '../Image/img1.jpg'

const DisplayBlog=(props)=>{
    return (
        <div>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
           image={Image}
         title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.title}
        </Typography>

         <Typography variant="body2" color="text.secondary">
        {props.post}
        </Typography> 

      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    );
}
export default DisplayBlog;