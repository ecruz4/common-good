import React, {Fragment} from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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

// const useStyles = makeStyles((theme) => ({
//   mainGrid: {
//     marginTop: theme.spacing(3),
//   },
// }));

const sections = [
  { title: 'Profile', url: '#' },
  { title: 'Charities', url: '#' },
  { title: 'Donations', url: '#' },
];

const mainFeaturedPost = {
  title: 'Support Causes You Care About',
  description:
    "Common Good is an alliance of more than 50 of Austin's best charities. Our 501(c)(3) high-impact nonprofit members are reviewed annually and must meet specific eligibility criteria before they’re approved for membership. Select Charities above to learn more about our nonprofit members' work and learn how you can support them..",
  image: 'https://communityimpact.com/wp-content/uploads/2016/12/Fotolia_112023896_Subscription_XXL.jpg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
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




/* eslint-disable import/no-extraneous-dependencies */
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';

// import db from './db/firebase';
// import UserContext from './contexts/UserContext';
// import LoginButton from './components/modals/LoginButton';
// import LogoutButton from './components/modals/LogoutButton';
// import SignupButton from './components/modals/SignupButton';

// To use context:
// In the file you want to access the value in,
// import React, { useContext } from 'react';
// import UserContext from '../../contexts/UserContext'; Or whatever the relative path is
// const { user } = useContext(UserContext);
// You can now use user like any other variable!

// function App() {
// user stores authentication data, like email and uid
//   const [user] = useAuthState(db.auth);
// userInfo will store a lot more, like email, and uid, but also bio, pic, etc...
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     if (user === null) {
//       return;
//     }
//     db.firestore
//       .collection('users')
//       .where('uid', '==', user.uid)
//       .get()
//       .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//           setUserInfo(doc.data());
//         });
//       })
//       .catch((error) => {
//         console.log('Error getting documents: ', error);
//       });
//   }, [user]);

//   return (
//     <div className="App">
//       <UserContext.Provider value={{ user, userInfo }}>
//         <SignupButton />
//         <LoginButton />
//         <LogoutButton />
//       </UserContext.Provider>
//     </div>
//   );
// }