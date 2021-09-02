import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableCategory from './TableCategory';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width: theme.spacing(150),
            height: theme.spacing(100),
        },
    },
}));

export default function Category() {
    const classes = useStyles();
    return (
        <div>

            <div className={classes.root}>
                <Paper elevation={1}>
                    <TableCategory/>
                    <h1>This page is not working yet, please use existing categories!</h1>
                </Paper>
            </div>
        </div>
    )
}
