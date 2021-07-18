import React from 'react'
import { Container, Typography, Button, makeStyles } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    btn: {
        fontSize: 60,
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: 'blue'
        }
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    }
})

export default function Create() {
    const { btn, title} = useStyles();
    return (
        <Container>
            <Typography
            className={title}
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
            >
                Create a new Note
            </Typography>
            <Button 
            className={btn}
            type="submit" 
            color="secondary" 
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            >
                Submit
            </Button>
        </Container>
    )
}
