import { Stack, Typography } from '@mui/material';
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
    
    return (
        <>
            <Stack>
                <Typography>{name}</Typography>
                <Typography>{created_at}</Typography>
            </Stack>
            <Typography>{login}</Typography>
        </>
    )
}

export default PrincipalInformation;