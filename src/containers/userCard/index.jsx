import React from 'react'
import { CardMedia, Grid, Stack } from '@mui/material';
import Description from '../../components/description';
import PrincipalInformation from '../../components/PrincipalInformation';

const UserCard = ({userState}) => {

    const {
        avatar_url
    } = userState;

    return (
        <Grid container spacing={2} sx={{
            my: "70px",
        }}>
            <Grid item xs={3}>
                <CardMedia
                    component="img"
                    alt="GitHub User"
                    src={avatar_url}
                    sx={{
                        mt: "40px",
                        borderRadius: "10px",
                        marginLeft: "5px"
                    }}
                />
            </Grid>
            <Grid item xs={9}>
                <Stack direction="column" spacing={1} sx={{
                    margin: "30px",
                }}>
                    <PrincipalInformation userState={userState} />
                    <Description userState={userState} />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default UserCard;