import React from 'react'
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    card: {
        width: '250px',
        margin: '.5rem',
        padding: '.5rem',

        border: '1px solid gray',
        borderRadius: '4px',

        cursor: 'pointer',

        '& img': {
            width: '100%',
            height: 'auto',
        },

        '& h4': {
            margin: '.3rem .5rem',
        },

        '& p': {
            margin: '0 .5rem',
        },

        transition: 'all .2s',
        '&:hover': {
            marginTop: '.3rem',

            boxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',
            WebkitBoxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',
            MozBoxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',
        }
    },
    addToCart: {
        padding: '.5rem 0',
        margin: '.5rem 0',
        width: '100%',

        border: 'none',
        borderRadius: '50px',

        backgroundColor: '#FF370E',
        color: '#fff',

        cursor: 'pointer',

        transition: 'all .2s',
        '&:hover': {
            marginTop: '.4rem',

            boxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',
            WebkitBoxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',
            MozBoxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',
        }
    },
})

function ProductCard() {

    const classes = styles();

    return (
        <div className={classes.card}>
            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg" alt="" />
            <h4 className="title">This is product one</h4>
            <p>Rs. 599.00</p>
            <button className={classes.addToCart}><h4>Add to cart</h4></button>
        </div>
    )
}

export default ProductCard
