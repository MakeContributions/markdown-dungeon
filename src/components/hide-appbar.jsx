import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { homeStyles } from '../utils/styles';
import Container from "@material-ui/core/Container";


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = homeStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolBar}>
              <Container maxWidth={'lg'} style={{
                  display: 'flex',
                  alignItems: 'center',
              }}>
                <img src={`${process.env.GATSBY_BASE_IMAGE_URL}` + `icon.png`} alt={'logo'} width={'80rem'}
                     style={{marginBottom:0, marginLeft:'-1.2rem'}}
                />
                <Typography variant='h5' color='inherit' style={{fontWeight:700}}>
                  Markdown Dungeon
                </Typography>
              </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}