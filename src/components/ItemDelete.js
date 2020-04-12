import React, { useState }  from 'react';
import Button        from '@material-ui/core/Button';
import Dialog        from '@material-ui/core/Dialog';
import DialogTitle   from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography    from '@material-ui/core/Typography';

export default function ItemDelete(props) {

    const [open, setOpen] = useState('');
  
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };     

    const deleteItem = (id) => {
        const url = '/api/items/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        props.stateRefresh();
        handleClose();
    } 

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
            삭제
            </Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle onClose={handleClose}>
                삭제 경고
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                    선택한 품목 정보가 삭제됩니다.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={(e) => {deleteItem(props.id)}}>삭제</Button>
                    <Button variant="outlined" color="primary" onClick={handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
        </div> 
    );
};