import React from 'react'

import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    quantity: {
        // padding: '0 1rem',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',

        border: '1px solid #d8d8d8',

        '& p': {
            padding: '4px 10px',
            backgroundColor: '#d8d8d8',

            cursor: 'pointer',

            '&:active': {
                backgroundColor: '#FF370E',
                color: '#fff',
            },
        },

        '& h4': {
            padding: '2px 0',
        },
    },
    removeBtn: {
        '& p': {
            padding: '0px',
            // backgroundColor: '#d8d8d8',
            borderRadius: '50px',

            cursor: 'pointer',

            '&:active': {
                backgroundColor: '#d8d8d8',
            },
        },
    },
})

function TableRowTemp() {
    const classes = styles();
    return (
        <>
            <tr>
                <td colspan="6"> <hr /></td>
            </tr>
            <tr>
                <td style={{ textAlign: 'center' }} class="tg-0lax">
                    <img height="auto" width="50px" src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg" alt="" />
                </td>
                <td style={{ textAlign: 'center' }} class="tg-0lax">
                    <h4>This is Title of Product one</h4>
                </td>
                <td style={{ textAlign: 'center' }} class="tg-0lax">5</td>
                <td style={{ textAlign: 'center' }} className={classes.quantity}>
                    <p>-</p>
                    <h4>3</h4>
                    <p>+</p>
                </td>
                <td style={{ textAlign: 'center' }} className={classes.removeBtn}><p>X</p></td>
                <td style={{ textAlign: 'right' }} class="tg-0lax">Rs. 599.00/-</td>
            </tr>
        </>
    )
}

export default TableRowTemp
