import { CardMedia, Grid } from '@mui/material';
import React from 'react'
import Description from '../../components/description';
import PrincipalInformation from '../../components/PrincipalInformation';

const UserCard = (props) => {

    const {
        userState
    } = props;

    const {
        avatar_url
    } = userState;

    return (
        <Grid container spacing={2} >
            <Grid item xs={3}>
                <CardMedia
                    component="img"
                    alt="GitHub User"
                    src={avatar_url}
                    sx={{
                        borderRadius: "10px"
                    }}
                />
            </Grid>
            <Grid item xs={9}>
                <PrincipalInformation userState={userState} />
                <Description userState={userState} />
            </Grid>
        </Grid>
    )
}

export default UserCard;