import styled from "styled-components";

export const BodySld = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.bodyBackground};
    min-height: 100vh;
    align-items: center;
`;
