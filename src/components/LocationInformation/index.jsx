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

    const iconSize = {
        width: "50px",
        height: "auto"
    };

    const stack = {
        display: "flex",
        justifyContent: "start",
        alignItems: "center"
    };

    return (
        <Grid container spacing={2} sx={{
            mt: "50px",
            mx: "auto"
        }}>
            <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={2} sx={stack}>
                    <LocationOnIcon sx={iconSize}/>
                    <Typography fontSize={20}>{location || "Not Available."}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={2} sx={stack}>
                    <TwitterIcon sx={iconSize}/>
                    <Typography fontSize={20}>{twitter_username ? `@${twitter_username}` : "Not Available."}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={2} sx={stack}>
                    <LanguageIcon sx={iconSize} />
                    <Typography fontSize={20}>{blog ? <a href={blog} target="_blank" style={{color:"white"}}>{blog}</a>: "Not Available."}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={2} sx={stack}>
                    <BusinessIcon sx={iconSize}/>
                    <Typography fontSize={20}>{company || "Not Available."}</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default LocationInformation;