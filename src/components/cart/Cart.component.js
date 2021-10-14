import React from 'react'
import { makeStyles } from '@mui/styles';
import TableRowTemp from './TableRow.template';

const styles = makeStyles({
    root: {},
    table: {
        padding: '8rem',
        paddingBottom: '0',
        width: '100%',

    },
    // quantity: {
    //     // padding: '0 1rem',
    //     marginTop: '20px',
    //     display: 'flex',
    //     justifyContent: 'space-between',

    //     border: '1px solid #d8d8d8',

    //     '& p': {
    //         padding: '4px 10px',
    //         backgroundColor: '#d8d8d8',

    //         cursor: 'pointer',

    //         '&:active': {
    //             backgroundColor: '#000',
    //             color: '#fff',
    //         },
    //     },

    //     '& h4': {
    //         padding: '2px 0',
    //     },
    // },
    // removeBtn: {
    //     '& p': {
    //         padding: '0px',
    //         // backgroundColor: '#d8d8d8',
    //         borderRadius: '50px',

    //         cursor: 'pointer',

    //         '&:active': {
    //             backgroundColor: '#d8d8d8',
    //         },
    //     },
    // },

    total: {
        padding: '0 8rem',
        textAlign: 'right',
    },
})

function Cart() {

    const classes = styles();

    return (
        <>
            <table className={classes.table} style={{ paddingTop: '8rem' }}>
                <thead>
                    <tr>
                        <th class="tg-0lax"></th>
                        <th class="tg-0lax">Description</th>
                        <th class="tg-0lax">Size</th>
                        <th class="tg-0lax">Quantity</th>
                        <th class="tg-0lax">Remove</th>
                        <th class="tg-0lax">Price</th>
                    </tr>
                </thead>
                <tbody>

                    <TableRowTemp />
                    <TableRowTemp />
                    <TableRowTemp />
                    <TableRowTemp />
                    {/* <tr>
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
                    </tr> */}
                    <tr>
                        <td colspan="6"> <hr /></td>
                    </tr>
                </tbody>
            </table>
            <div className={classes.total} >
                <h3 style={{ color: '#81919a' }}>Sub Total: 1234.00 /-</h3>
                <h3 style={{ color: '#81919a' }}>Tax: 12.00 /-</h3>
                <h3>Total: 1246.00 /-</h3>
            </div>
        </>
    )
}

export default Cart
