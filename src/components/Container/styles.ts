import styled from "styled-components";

export const ContainerSld = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.containerBackground};
    align-items: center;
    padding: 20px;
`;
