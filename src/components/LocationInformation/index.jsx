import React from 'react'
import { Grid, Stack, Typography } from '@mui/material';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {
    const {
        userState
    } = props;

    const {
        location,
        twitter_username,
        blog,
        company
    } = userState;

    return (
        <>
            <Grid container spacing={2} sx={{
                marginTop: "20px"
            }}>
                <Grid item xs={6} sx={{

                }}>
                    <Stack direction="row" spacing={2}>
                        <LocationOnIcon/>
                        <Typography>{location || "Not Available."}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction="row" spacing={2}>
                        <TwitterIcon/>
                        <Typography>{twitter_username ? `@${twitter_username}` : "Not Available."}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction="row" spacing={2}>
                        <LanguageIcon/>
                        <Typography>{blog ? <a href={blog} target="_blank" style={{color:"white"}}>{blog}</a>: "Not Available."}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction="row" spacing={2}>
                        <BusinessIcon/>
                        <Typography>{company || "Not Available."}</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default LocationInformation;