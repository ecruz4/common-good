/* eslint-disable react/prop-types */
import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import RequestButton from "../modals/RequestButton";
import OfferButton from "../modals/OfferButton";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 18,
    fontFamily: ["Pattaya", "sans-serif"].join(","),
  },
});

function ProfileAbout({ data, edit }) {
  return (
    <div style={{ backgroundColor: "primary", height: "60vh" }}>
      {/* <p>Profile About</p>
      <span>{data.bio}</span> */}
      <Grid
        style={{
          paddingTop: "40px",
          paddingLeft: "30px",
          paddingRight: "20px",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h5">About Me:</Typography>
        </ThemeProvider>
        <Typography>{data.bio}</Typography>
        {data.type === "org" ? (
          <div>
            <ThemeProvider theme={theme}>
              <Typography style={{ paddingTop: "20px" }} variant="h5">
                Address:
              </Typography>
            </ThemeProvider>
            <Typography>{`${data.address}, ${data.city}, ${data.state} ${data.zipcode}`}</Typography>
            <ThemeProvider theme={theme}>
              <Typography style={{ paddingTop: "20px" }} variant="h5">
                Website:
              </Typography>
            </ThemeProvider>
            <Typography>
              <a
                style={{ color: "inherit" }}
                rel="noreferrer"
                target="_blank"
                href={data.url}
              >{`Link to ${data.name} Website`}</a>
            </Typography>
          </div>
        ) : null}
        {edit && data.type === "user" ? (
          <Grid item alignItems="flex-end" justify="flex-start">
            <OfferButton />
          </Grid>
        ) : null}
        {edit && data.type === "org" ? (
          <Grid item alignItems="flex-end" justify="flex-start">
            <RequestButton />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

export default ProfileAbout;
