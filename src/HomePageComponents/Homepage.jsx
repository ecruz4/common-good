import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#ffff57',
//       main: '#ffed03',
//       dark: '#c7bb00',
//       contrastText: '#000000',
//     },
//     secondary: {
//       light: '#6ec6ff',
//       main: '#2196f3',
//       dark: '#0069c0',
//       contrastText: '#000000',
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Profile', url: '#' },
  { title: 'Charities', url: '#' },
  { title: 'Donations', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

function Homepage() {
  const classes = useStyles();
  return (
    <>

      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Common Good" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />

    </>
  );
}

export default Homepage;