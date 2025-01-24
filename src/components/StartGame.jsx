import styled from "styled-components"
import { Button } from "./styled/Button";

export default function StartGame({toggle}){
    return(
        <Contianer>
            <div>
                <img src="/images/dices.png" alt="dices" />
            </div>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button
                onClick={toggle}>
                    Play Now
                </Button>
            </div>
        </Contianer>
    )
}

const Contianer = styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;

.content h1{
    font-size: 96px;
    white-space: nowrap;
}

`;

