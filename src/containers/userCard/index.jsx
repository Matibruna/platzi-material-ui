import React from 'react'
import { CardMedia, Grid, Stack } from '@mui/material';
import Description from '../../components/description';
import PrincipalInformation from '../../components/PrincipalInformation';

const UserCard = ({userState}) => {

    const {
        avatar_url
    } = userState;

    return (
        <Grid container spacing={2}>

            <Grid item xs={12} sx={{height: "50px"}}/>

            <Grid item xs={12} md={6} sx={{my: "50px"}}>
                <CardMedia
                    component="img"
                    alt="GitHub User"
                    src={avatar_url}
                    sx={{
                        maxWidth: "min(400px, 90vw)",
                        borderRadius: "10px",
                        margin: "auto"
                    }}
                />
            </Grid>

            <Grid item xs={12} md={6} sx={{my: "50px"}}>
                <Stack spacing={1} direction="column">
                    <PrincipalInformation userState={userState} />
                    <Description userState={userState} />
                </Stack>
            </Grid>
            
            <Grid item xs={12} sx={{height: "50px"}}/>

        </Grid>
    )
}

export default UserCard;