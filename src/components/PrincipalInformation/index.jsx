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
        <div>
            <Stack direction="row" sx={{
                justifyContent: "space-between"
            }}>
                <Typography variant="h4">{name}</Typography>
                <Typography variant="subtitle2">{created_at}</Typography>
            </Stack>
            <Stack>
                <Typography variant="caption">{`@${login}`}</Typography>
            </Stack>
        </div>
    )
}

export default PrincipalInformation;