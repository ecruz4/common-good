import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

function Copyright() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Typography style={{ margin: 4 }} variant="body2" color="textSecondary">
        <FacebookIcon />
      </Typography>
      <Typography style={{ margin: 4 }} variant="body2" color="textSecondary">
        <InstagramIcon />
      </Typography>
      <Typography style={{ margin: 4 }} variant="body2" color="textSecondary">
        <PinterestIcon />
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        {/* <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography> */}
        <Typography
          variant="subtitle2"
          align="center"
          color="textSecondary"
          component="p"
          style={{ fontFamily: "'Halant', serif" }}
          gutterBottom
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
