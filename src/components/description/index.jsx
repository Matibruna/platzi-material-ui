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
        <React.Fragment>
            <Stack>
                <Typography variant="body1" sx={{marginLeft: "10%"}}>{bio || "Lorem Ipsum."}</Typography>
            </Stack>
            <PaperInformation userState={userState} />
            <LocationInformation userState={userState} />
        </React.Fragment>
    )
}

export default Description;