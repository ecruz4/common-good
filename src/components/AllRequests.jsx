import React, { useEffect, useState } from "react";
import { Grid, Button, Slide, makeStyles, Container } from "@material-ui/core";
import firestore from "../db/firebase";
import RequestTile from "./tiles/RequestTile";
import capitalize from "../utils/capitalize";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 25,
  },
  moreButton: {
    marginTop: 30,
    padding: 20,
    minWidth: 200,
  },
}));

const AllRequests = ({ uid, searchTerm }) => {
  const classes = useStyles();
  const [docs, setDocs] = useState([]);
  const retrievedDocs = [];
  const [lastVisibleDoc, setLastVisibleDoc] = useState({});
  const [noMoreDocs, setNoMoreDocs] = useState(true);

  const findAllByUrgency = () => {
    firestore.firestore
      .collection("requests")
      .orderBy("emergency", "desc")
      .limit(6)
      .get()
      .then((querySnapshot) => {
        setLastVisibleDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          retrievedDocs.push(doc.data());
        });
        setDocs(retrievedDocs);
        setTimeout(() => setNoMoreDocs(false), 500);
      })
      .catch((err) => console.log(err.message));
  };

  const findMoreByUrgency = () => {
    firestore.firestore
      .collection("requests")
      .orderBy("emergency", "desc")
      .startAfter(lastVisibleDoc)
      .limit(6)
      .get()
      .then((querySnapshot) => {
        const numOfDocsFetched = querySnapshot.docs.length;
        if (numOfDocsFetched > 0) {
          setNoMoreDocs(false);
          setLastVisibleDoc(querySnapshot.docs[numOfDocsFetched - 1]);
          querySnapshot.forEach((doc) => {
            retrievedDocs.push(doc.data());
          });
          setDocs([...docs, ...retrievedDocs]);
        } else {
          console.log("No more requests to fetch.");
          setNoMoreDocs(true);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const findByCriteria = (field, operator, term) => {
    console.log(field, operator, term);
    firestore.firestore
      .collection("requests")
      .where(field, operator, term)
      .orderBy("emergency", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          retrievedDocs.push(doc.data());
        });
        setDocs(retrievedDocs);
      })
      .catch((err) => console.log(err.message));
  };

  const findByName = (term) => {
    findByCriteria("title", "==", capitalize(term));
  };

  const findByUid = (id) => {
    findByCriteria("org_id", "==", id);
  };

  useEffect(() => {
    // if an organization's uid is passed as prop, component will render all RequestTiles related to that organization.
    // if no uid is provided, component will default to listening to searches by item name.
    // if no search term exists, it will render all RequestTiles, prioritizing emergency requests.

    if (uid) {
      findByUid(uid);
    } else if (!searchTerm || searchTerm === "") {
      findAllByUrgency();
    } else {
      findByName(searchTerm);
    }
  }, [uid, searchTerm]);

  return (
    <Container className={classes.container}>
      <Grid style={{ justifyContent: "space-between" }} container spacing={4}>
        {docs.map((doc) => (
          <RequestTile doc={doc} key={doc.title} />
        ))}
      </Grid>

      {noMoreDocs || searchTerm ? (
        <></>
      ) : (
        <div className={classes.buttonContainer}>
          <Slide direction="up" in>
            <Button
              size="large"
              className={classes.moreButton}
              color="secondary"
              onClick={() => findMoreByUrgency()}
            >
              show more
            </Button>
          </Slide>
        </div>
      )}
    </Container>
  );
};

export default AllRequests;
