import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import John from '../assets/profileImage.jpg';

const mainFeaturedPost = {
  title: 'Support Causes You Care About',
  description:
    "Common Good is an alliance of more than 50 of Austin's best charities. Our 501(c)(3) high-impact nonprofit members are reviewed annually and must meet specific eligibility criteria before they’re approved for membership. Select Charities above to learn more about our nonprofit members' work and learn how you can support them.",
  image:
    'https://communityimpact.com/wp-content/uploads/2016/12/Fotolia_112023896_Subscription_XXL.jpg',
  imgText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Welcome to our newest donor!',
    description:
      "John has lived in Austin his whole life and has often worked with local charities to improve his community. His favorite charity to work with is Classroom for All, he has been donating and volunteering for this organization over the past 5 years! Let's give John a warm welcome!",
    image: John,
    imageText: 'Image Text',
  },
  {
    title: 'Charity of The Month',
    description:
      'Congratulations Operation Blue Santa! In 2020, they provided food cards and toy gift cards for families in need during the holiday season. Their service began with about 20 needy families, in 2020 they easily served over 8,000 families. This is only possible because of the goodwill and big hearts of Austin’s citizens, businesses, and civic groups that supported them.',
    image:
      'https://cbsaustin.com/resources/media/ec2b0f93-831b-4441-aca6-3304d5973ce6-large16x9_BlueSantaSponsorship.png?1601053591239',
    imageText: 'Image Text',
  },
  {
    title: 'Annual Summer Cleanup',
    description:
      "It's that time of year again! Come join the other volunteers in our community to clean up our favorite public parks and lakes. Last year we had 15 volunteers and this year our goal is to have 35! Let's make this summer the best one yet! ",
    image:
      'https://austin.com/wp-content/uploads/2020/01/67151026_10157135166007860_6253455525229363200_n.jpg.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Upcoming Events',
    description:
      'July 4 - Fourth Of July Charity Block Party! \n July 16 - Movie Night In The Park \n August 1 - Back To School Clothes Drive',
    image:
      'http://3.bp.blogspot.com/-4iX9K6hf5mI/Umvbme2DRfI/AAAAAAAAAMU/aVVp14UD9H8/s1600/Happy-Kids_2.jpg',
    imageText: 'Image Text',
  },
];

function Homepage() {
  // const classes = useStyles();
  return (
    <>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
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
