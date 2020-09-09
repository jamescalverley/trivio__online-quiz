import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function TimeExpire(){

    function getModalStyle() {
        const top = 50;
        const left = 50;
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    };

    const useStyles = makeStyles((theme) => ({
        paper: {
        position: 'absolute',
        minwidth: 200,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        },
    }));

    const [open, setOpen] = useState(true);
    const classes = useStyles();
  
    const [modalStyle] = useState(getModalStyle);

    function handleClose(){
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">TIME HAS EXPIRED</h2>
          <p id="simple-modal-description">
            --description goes here
          </p>
        </div>
    );

    return (
        <div>
          {/* <button type="button" onClick={handleOpen}>
            Open Modal
          </button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      );
};

export default TimeExpire;