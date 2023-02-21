import { Stack, Typography } from '@mui/material';
import React from 'react'

const Description = (props) => {
    const {
        userState
    } = props;

    const {
        bio,
    } = userState;
    
    return (
        <>
            <Stack>
                <Typography>{bio || "Lorem Ipsum."}</Typography>
            </Stack>
            
        </>
    )
}

export default Description;