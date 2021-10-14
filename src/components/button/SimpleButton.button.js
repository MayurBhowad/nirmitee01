import React from 'react'
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    root: {
        marginTop: '2px',
        padding: '10px 30px',
        color: props => props.textColor,
        backgroundColor: props => props.bgColor,
        border: 'none',
        borderRadius: '50px',

        boxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',
        WebkitBoxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',
        MozBoxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',

        cursor: 'pointer',

        transition: 'all .2s',
        '&:hover': {
            marginTop: '0',
            boxShadow: '0px 13px 35px -7px rgba(72,72,72,0.79)',
            WebkitBoxShadow: '0px 13px 35px -7px rgba(72,72,72,0.79)',
            MozBoxShadow: '0px 13px 35px -7px rgba(72,72,72,0.79)',
        },

    },
});

function SimpleButton(props) {

    const classes = styles(props)
    console.log(props);
    return (
        <button className={classes.root}>
            <h3>{props.text}</h3>
        </button>
    )
}

export default SimpleButton
