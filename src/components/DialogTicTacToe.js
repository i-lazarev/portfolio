import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ProjectImage from "../images/Screenshot 2020-12-09 at 15.50.31.png";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../styles/CustomizedDialogs.css";
import { useTheme } from "@material-ui/core/styles";

const DialogTodo = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <div id="project-img" onClick={handleClickOpen}>
        <div className="container">
          <img src={ProjectImage} alt="thumbnail" className="img-thumbnail" />
          <div className="overlay">
            <div style={{ textAlign: "center" }} className="text">
              About this project
            </div>
          </div>
        </div>
        <p style={{ color: "#ffffff" }}>Tic Tac Toe</p>
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
          style={{ textAlign: "center" }}
        >
          About Tic Tac Toe
        </DialogTitle>
        <DialogContent className="dialog-background-color">
          <div>
            <h2>Built with</h2>
            <ul>
              <li>React and create-react-app</li>
              <li>React Hooks</li>
              <li>Vercel - for deployment</li>
            </ul>
          </div>
        </DialogContent>
        <DialogActions className="dialog-background-color">
          <Button
            variant="contained"
            href="https://tic-tac-toe-tau-seven.vercel.app/"
            target="_blank"
            color="primary"
          >
            Tic Tac Toe
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DialogTodo;
