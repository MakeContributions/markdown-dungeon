import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import infos from '../data/dungeon-info.json';
import { homeStyles } from '../utils/styles';

export default function CardGrid(props) {
  const classes = homeStyles();
  const post = props.post;
  const slug = post.fields.slug;
  const splited = slug.split('/');
  const info = infos.find(
    (d) => d.name === splited[2] && d.language === splited[1]
  );
  post.excerpt = post.excerpt.replace(' 🤠開始', '');
  const defaultImage =
    info === undefined || info.image === ''
      ? `${process.env.GATSBY_BASE_IMAGE_URL}${process.env.GATSBY_DEFAULT_IMAGE_NAME}`
      : `${process.env.GATSBY_BASE_IMAGE_URL}${info.image}`;

  return info ? (
    <Grid item xs={props.xs} sm={props.sm} md={props.md}>
      <CardActionArea
        href={slug.slice(0, -1)}
        style={{ textDecoration: 'none' }}
      >
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={defaultImage}
            title={info.display}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant='h5' component='h2'>
              {info.display}
            </Typography>
            <Typography>{post.excerpt}</Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>
              <ArrowForwardIcon />
            </Button>
          </CardActions>
        </Card>
      </CardActionArea>
    </Grid>
  ) : null;
}
