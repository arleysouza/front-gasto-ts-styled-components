import styled from 'styled-components';

export const TableSld = styled.table`
    caption-side: top;
    caption {
        font-size: 75%;
        text-align: justify;
    }
    margin-top: 20px;
    border: none;
    border-collapse: collapse;
    td,th {
        padding: 5px 5px;
        border: none;
        margin: 0px;
    }
    tbody tr {
        :hover {
            background-color: ${props => props.theme.trBackgroundHover};
        }
    }
`;