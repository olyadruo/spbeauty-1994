import Clickable from "./Clickable";
import styled from "styled-components";

function IconOnlyButton({icon}) {
    const Container = styled.div`
        opacity: 0.7;
        transition: opacity 0.3s;
        &:hover {
            opacity: 1;
        }
    `;
    return (
        <Container><Clickable>{icon}</Clickable></Container>
    );
}

export default IconOnlyButton;