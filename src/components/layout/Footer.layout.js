import React from 'react'
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    root: {
        padding: '5rem 4rem 2rem',
        marginTop: '3rem',

        textAlign: 'center',

        backgroundColor: '#4a4a4a',

        '& h4': {
            color: '#fff'
        },

        '& p': {
            color: '#fff'
        },
    },

})

function Footer() {

    const classes = styles();

    return (
        <div className={classes.root} >
            <h4>TTHis is Footer</h4>
            <p>&copy; nirmitee 2021</p>
        </div>
    )
}

export default Footer
