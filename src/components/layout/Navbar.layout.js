import React from 'react'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Search, FavoriteBorder, LocalMallOutlined } from '@material-ui/icons';
import Tooltip from '@mui/material/Tooltip';

const styles = makeStyles({
    root: {
        padding: '0 8rem',
        width: '100%',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-between',

        backgroundColor: '#fff',

        boxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',
        WebkitBoxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',
        MozBoxShadow: '0px 5px 13px -5px rgba(51,48,48,1)',
    },
    left: {
        display: 'flex',
        alignItems: 'center',
    },
    right: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        '& h1': {
            color: '#FF370E',
        },
    },
    navListMain: {
        '& ul': {
            display: 'flex',

            '& li': {
                margin: '0 1rem',
                transition: 'all .2s',

                '&:hover': {
                    color: '#FF370E',
                },
            },
        }
    },
    user: {
        display: 'flex',
        alignItems: 'center',
    },
    userImg: {
        marginLeft: '1rem',
        widht: '50px',
        height: '50px',
        borderRadius: '50%',
    },
    tools: {
        '& ul': {
            display: 'flex',

            '& li': {
                fontSize: '12px',
                margin: '0 1rem',
                transition: 'all .2s',

                '&:hover': {
                    color: '#FF370E',
                },
            },
        },
    },
})


function Navbar() {

    const classes = styles();
    return (
        <div className={classes.root} >
            <div className={classes.left}>
                <div className={classes.logo}>
                    <Link to="/">
                        <h1>NIRMITEE</h1>
                    </Link>
                </div>
                <div className={classes.navListMain}>
                    <ul>
                        <li>SHOP</li>
                        <li>FABRIC</li>
                        <li>JOURNAL</li>
                        <li>ABOUT</li>
                    </ul>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.user}>
                    <p>WELCOM, USER</p>
                    <img className={classes.userImg} src="https://randomuser.me/api/portraits/men/40.jpg" alt="" />
                </div>
                <div className={classes.tools}>
                    <ul>
                        <li>
                            <Tooltip title="Search"><Search /></Tooltip>
                        </li>
                        <li>
                            <Tooltip title="Like">
                                <FavoriteBorder />
                            </Tooltip>
                        </li>
                        <li>
                            <Link to="/cart">
                                <Tooltip title="Cart">
                                    <LocalMallOutlined />
                                </Tooltip>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
