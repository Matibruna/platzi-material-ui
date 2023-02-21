import React, { useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Searcher = (props) => {

    const {
        user,
        setUser
    } = props;

    const [value, setValue] = useState("");

    const onSearch = (e) => {
        if(user !== value){
            setUser(value);
        }
    }

    return(
    <Stack direction="row" sx={{
        marginTop: "50px",
        width: "75%",
    }}>
        <TextField 
            value={value}
            onChange={event=>setValue(event.target.value)}
            label="GitHub User"
            placeholder="Octocat"
            size="small"
            sx={{
                width: "100%",
                input: {
                    color: "white"
                },
                '& label.Mui-focused': {
                    color: 'white',
                },
                '& label': {
                    color: 'white',
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white'
                    }
                }
            }}/>
        <IconButton 
            onClick={onSearch}
            size="small"
            sx={{
                color: "white",
                left: "-40px",
        }}>
            <SearchIcon />
        </IconButton>
    </Stack>);
}