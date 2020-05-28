import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ProjectImage from "../images/Screenshot 2020-05-22 at 12.09.15.png";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import "../styles/CustomizedDialogs.css";
import { useTheme } from '@material-ui/core/styles';

const CustomizedDialogs = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <div id="project-img" onClick={handleClickOpen}>
        <div className="container">
          <img src={ProjectImage} alt="thumbnail" className="img-thumbnail" />
          <div className="overlay">
            <div style={{textAlign:"center"}} className="text">About this project</div>
          </div>
        </div>
        <p style={{ color: "#ffffff" }}>yummyDB</p>
      </div>
      <Dialog
      id="dialog"
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          className="dialog-background-color "
          id="form-dialog-title"
          style={{textAlign:"center"}}
        >
          About yummyDB
        </DialogTitle>
        <DialogContent className="dialog-background-color">
          <div>
            <h2>Built with</h2>
            <ul>
              <li>React and React Hooks - for all the UI components</li>
              <li>Context API - to manage states</li>
              <li>
                Vanilla JavaScript - to handle big part of logic on CV and Cover
                Letter builders
              </li>
              <li>
                React-strap and CSS - site is completely responsive and renders
                the same in all browsers
              </li>
              <li>
                Restful API - for communication between front end and back end
              </li>
              <li>Spoonacular API - recipes library</li>
              <li>Node.js and Express.js- for backend environment</li>
              <li>MongoDB - Database for storing user information</li>
              <li>Mongoose - for queries and User Schema</li>
              <li>JWT - for authentication</li>
              <li>Hashing - for encryption</li>
              <li>Heroku - for deployment</li>
            </ul>
          </div>
          <iframe
          id="iframe"
            title="yummyDB"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BleOsfG1XAE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
             mozallowfullscreen="mozallowfullscreen"
             msallowsullscreen="msallowfullscreen"
             osllowfullscreen="oallowfullscreen"
             webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </DialogContent>
        <DialogActions className="dialog-background-color">
        <Button variant="contained" href="http://yummy-db.herokuapp.com/#/" target="_blank"color="primary">
            yummyDB
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CustomizedDialogs;
