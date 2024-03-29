import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { Searcher } from "./components/Searcher";
import { getGitHubUser } from "./services/getGitHubUser";
import UserCard from "./containers/userCard";

export default function App() {

    const [user, setUser] = useState("octocat");
    const [userState, setUserState] = useState('inputUser');
    const [notFound, setNotFound] = useState(false);
    
    const getUser = async (user) => {
        const userDataResponse = await getGitHubUser(user);

        if(userState === 'octocat'){
            localStorage.setItem('octocat', JSON.stringify(userDataResponse));
        }

        if(userDataResponse.message === "Not Found"){
            const { octocat } = localStorage;
            setUserState(JSON.parse(octocat));
            setNotFound(true);
        }else{
            setUserState(userDataResponse);
            setNotFound(false);
        }
    }

    useEffect(()=>{
        getUser(user);
    },[user]);

    return(
        <Container disableGutters maxWidth={false} sx={{background: "#BBBBBB", maxWidth: "100vw", minHeight: "98vh"}}>
            <Box sx ={{height: "100px"}}/>
            <Box sx={{
                background: "linear-gradient(90deg, rgba(33,0,36,0.88) 17%, rgba(24,4,69, 0.87) 38%, rgba(9,9,121,0.85) 60%, rgba(0,112,255,1) 100%)",
                borderRadius: "15px",
                margin: "auto",
                paddingTop: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
                maxWidth: "1200px"
            }}>
                <Searcher user={user} setUser={setUser} />
                {notFound && <span style={{marginTop: "5px", color: "red"}}>User not found!</span>}
                <UserCard userState={userState} /> 
            </Box>
        </Container>
    )
}
