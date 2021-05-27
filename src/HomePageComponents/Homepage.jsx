import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';



const mainFeaturedPost = {
  title: 'Support Causes You Care About',
  description:
    "Common Good is an alliance of more than 50 of Austin's best charities. Our 501(c)(3) high-impact nonprofit members are reviewed annually and must meet specific eligibility criteria before they’re approved for membership. Select Charities above to learn more about our nonprofit members' work and learn how you can support them.",
  image: 'https://communityimpact.com/wp-content/uploads/2016/12/Fotolia_112023896_Subscription_XXL.jpg',
  imgText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://austin.com/wp-content/uploads/2020/01/67151026_10157135166007860_6253455525229363200_n.jpg.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'http://3.bp.blogspot.com/-4iX9K6hf5mI/Umvbme2DRfI/AAAAAAAAAMU/aVVp14UD9H8/s1600/Happy-Kids_2.jpg',
    imageText: 'Image Text',
  },
];

function Homepage() {
  // const classes = useStyles();
  return (
    <>

      {/* <CssBaseline /> */}
      <Container maxWidth="lg" >
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>


    </>
  );
}

export default Homepage;




