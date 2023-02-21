import React, { useState } from "react";
import { Container } from "@mui/material";
import { Searcher } from "./components/Searcher";

export default function App(){

    const [user, setUser] = useState("octocat");
    const [userStater, userState] = useState(user);

    return(
            <Container sx={{
                background: "linear-gradient(90deg, rgba(33,0,36,0.88) 17%, rgba(24,4,69, 0.87) 38%, rgba(9,9,121,0.85) 60%, rgba(0,112,255,1) 100%)",
                width: "80vw",
                height: "500px",
                borderRadius: "15px",
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Searcher setUser={setUser} />
            </Container>
    )
}
