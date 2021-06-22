import React from 'react';
import { graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from '../components/copyright';
import CardGrid from '../components/card-grid';
import HideAppBar from '../components/hide-appbar';
import { homeStyles } from '../utils/styles';
import Seo from '../components/seo';

export default function Home({ data }) {
  const classes = homeStyles();
  const posts = data.allMarkdownRemark.nodes;
  return (
    <React.Fragment>
      <Seo />
      <CssBaseline />
      <HideAppBar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Markdown Dungeon
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              A dungeon is a place or prison where people are held. 
              <br/>
              Usually, they can be found underground.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='lg'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts.map((post, index) => {
              console.log(post, index);
              return <CardGrid item key={index} post={post} xs={12} sm={6} md={3} />
            })}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/begin-journey/" } }
    ) {
      nodes {
        fields {
          slug
        }
        excerpt(truncate: true, pruneLength: 100)
      }
    }
  }
`;
