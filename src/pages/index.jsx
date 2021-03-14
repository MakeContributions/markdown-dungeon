import React from 'react';
import { graphql } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from '../components/copyright';
import CardGrid from '../components/card-grid';
import { homeStyles } from '../utils/styles';

export default function Home({ data }) {
  const classes = homeStyles();
  const posts = data.allMarkdownRemark.nodes;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit' noWrap>
            Markdown Dungeon
          </Typography>
        </Toolbar>
      </AppBar>
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
              A dungeon is a room or cell in which prisoners are held,
              especially underground.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts.map((post, index) => (
              <CardGrid item key={index} post={post} />
            ))}
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
