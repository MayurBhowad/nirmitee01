import React from 'react'
import { makeStyles } from '@mui/styles';
import ProductCard from '../cards/ProductCard.component';

const styles = makeStyles({
    root: {
        margin: '0 5rem',
        paddingTop: '8rem',
    },
    cardRow: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
})

function Home() {

    const classes = styles();

    return (
        <div className={classes.root}>
            <div className={classes.cardRow}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Home
