import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { ArrowBack } from '@material-ui/icons';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SimpleButton from '../button/SimpleButton.button';

const styles = makeStyles({
    root: {
        padding: 150,
        paddingTop: 100,
        display: 'flex',
    },
    left: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        flexBasis: '33.33%',
        '& img': {
            padding: '.5rem',
            width: '250px',
            height: 'auto',
        },
    },
    right: {
        padding: ' 2rem',
        flex: 1,
        flexBasis: '33.33%',

        '& h2': {
            padding: '1rem 0',
            fontSize: '30px',
        },

        '& p': {
        },
    },
    goBackArrow: {
        display: 'flex',
        alignItems: 'center',
        color: '#727c81',

        cursor: 'pointer',

        '&:hover': {
            color: '#000',
        }
    },
    rating: {
        padding: '.5rem 0',
        display: "flex",
        justifyContent: 'space-between',
    },
    price: {
        padding: '.5rem 0',
        display: 'flex',
        alignItems: 'center',

        '& h4': {
            marginLeft: '3rem',
            color: '#8a8d8f'
        },
    },
    description: {
        padding: '.5rem 0',
        color: '#727c81',
    },

    sizeQuantity: {
        padding: '1rem 0',
        display: 'flex',
    },

    inputSize: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& .MuiInputBase-root': {
            borderRadius: 40,
        },

        '& .MuiInputBase-input': {
            padding: 5,
            textAlign: 'center',
            outLine: 'none',
        },
    },

    quantity: {
        width: '100px',
        textAlign: 'center',
        '& div': {
            margin: 8,
            padding: 4,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            border: '1px solid #ADADAD',
            borderRadius: 20,

            '& h4': {
                padding: '0',
            },

            '& p': {
                padding: '0px 10px',
                fontSize: '20px',
                borderRadius: 20,

                cursor: 'pointer',

                '&:active': {
                    backgroundColor: '#d8d8d8',
                },
            }
        }
    },


})

function SingleProduct() {

    const classes = styles();

    const [size, setSize] = useState(10)

    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg" alt="" />
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg" alt="" />
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg" alt="" />
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg" alt="" />
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg" alt="" />
            </div>
            <div className={classes.right}>
                <div className={classes.goBackArrow}>
                    <ArrowBack />GO Back
                </div>
                <h2>This is Title of Product one</h2>
                <div className={classes.rating}>
                    <p>4.5/5.0</p>
                    <p>18 votes</p>
                </div>
                <div className={classes.price} >
                    <h3>Rs. 599.00</h3>
                    <del><h4>Rs. 899.00</h4></del>
                </div>
                <p className={classes.description}>This is the description of product one. That saying simply taht, this product
                    is awesome and blah blahh blahhh...
                </p>
                <div className={classes.sizeQuantity}>
                    <div className={classes.inputSize}>
                        <p>SIZE</p>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                value={size}
                                //   onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className={classes.quantity}>
                        <p>Quantity</p>
                        <div>
                            <p>-</p>
                            <h4>3</h4>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '1rem 0', display: 'flex' }} >
                    <div style={{ marginRight: '.5rem' }} >
                        <SimpleButton bgColor='#FF370E' text='Add To Cart' textColor='#fff' />
                    </div>
                    <SimpleButton bgColor='#EDEDED' text='Save To Whishlist' textColor='#475e6b' />
                </div>
                <p style={{
                    marginTop: '1rem',
                    color: '#acb6bb'
                }}>Standard delivery in 2-4 days or Premium delivery in 2-4 hours!</p>
            </div>
        </div>
    )
}

export default SingleProduct
