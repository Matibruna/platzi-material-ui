import { Stack, Typography, Grid } from '@mui/material';
import React from 'react'

const PrincipalInformation = (props) => {

    const {
        userState
    } = props;

    const {
        login,
        name,
        created_at
    } = userState;
    
    const date = new Date(created_at);

    return (
        <Grid sx={{marginLeft: "10%"}}>
            <Typography align="start" variant="h4" sx={{fontWeight: "bold"}}>
                {name}
            </Typography>

            <Typography variant="subtitle2" sx={{fontWeight: "bold"}}>
                {date.toDateString()}
            </Typography>
                
            <Stack>
                <Typography variant="caption">{`@${login}`}</Typography>
            </Stack>
        </Grid>
    )
}

export default PrincipalInformation;