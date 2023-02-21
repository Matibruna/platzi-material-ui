import React from 'react'
import Description from '../../components/description';
import { CardMedia, Grid, Stack } from '@mui/material';
import PrincipalInformation from '../../components/PrincipalInformation';

const UserCard = (props) => {

    const {
        userState
    } = props;

    const {
        avatar_url
    } = userState;

    return (
        <Grid container spacing={2} sx={{
            marginTop: "20px",
        }}>
            <Grid item xs={3}>
                <CardMedia
                    component="img"
                    alt="GitHub User"
                    src={avatar_url}
                    sx={{
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