import { Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react'

const PaperInformation = (props) => {
    const {
        userState
    } = props;

    const {
        public_repos,
        followers,
        following
    } = userState;

    return (
        <Paper elevation={12} sx={{minWidth: "200px", width: "90%", mx: "auto !important"}}>
            <Stack direction="row" sx={{
                justifyContent: "space-evenly",
                padding: "15px"
            }}>
                <Grid spacing={6} container columns={10} sx={{textAlign: "center"}}>
                    <Grid item xs={10} lg={4}>
                        <Stack>
                            <Typography variant="h5" sx={{fontWeight: "bold"}}>Repositorios:</Typography>
                            <Typography variant="h6">{public_repos}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={10} lg={3}>
                        <Stack>
                            <Typography variant="h5" sx={{fontWeight: "bold"}}>Followers:</Typography>
                            <Typography variant="h6">{followers}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={10} lg={3}>
                        <Stack>
                            <Typography variant="h5" sx={{fontWeight: "bold"}}>Following:</Typography>
                            <Typography variant="h6">{following}</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Paper>
    )
}

export default PaperInformation;