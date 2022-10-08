import styled from "styled-components";

export const ErrorSld = styled.div`
    padding: 10px 18px;
    margin: 5px 0px 15px 0px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.theme.errorBackground};
`;
