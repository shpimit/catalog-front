import React from 'react';
import './Home.css';
// import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import mainImage from '../itplayground.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    image: {
        // backgroundImage: 'url(../itplayground.jpg)',
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },    
}));


export default function Home() {

    const classes = useStyles();

    return (
        <div className='Home' style={{backgroundImage: `url(${mainImage})`}}>
            <div className="App-content">
                <h1>품목관리</h1>
                <p>카타로그</p>
            </div>            
        </div>
    );
};

// export default withStyles(styles)(Home);
