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
        <Paper elevation={3} >
            <Stack spacing={3} direction="row" sx={{
                justifyContent: "space-evenly",
                margin: "20px"
            }}>
                <Grid container sx={{textAlign: "center"}}>
                    <Grid item xs={12} md={5} lg={4}>
                        <Stack>
                            <Typography variant="h5" sx={{fontWeight: "bold"}}>Repositorios:</Typography>
                            <Typography variant="h6">{public_repos}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack>
                            <Typography variant="h5" sx={{fontWeight: "bold"}}>Followers:</Typography>
                            <Typography variant="h6">{followers}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={3} lg={4}>
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