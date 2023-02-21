import { Stack, Typography } from '@mui/material';
import React from 'react'
import LocationInformation from '../LocationInformation';
import PaperInformation from '../PaperInformation';

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
                <Typography variant="body1">{bio || "Lorem Ipsum."}</Typography>
            </Stack>
            <PaperInformation userState={userState} />
            <LocationInformation userState={userState} />
        </>
    )
}

export default Description;