import styled from '@emotion/styled';
import ClipLoader from 'react-spinners/ClipLoader';


export const Contacts = styled.ul`
margin: auto;
box-shadow: 2px 2px 26px 9px #2624FF;
`;

export const Contact = styled.li`
display: flex;
justify-content:space-between;
align-items: center;
margin-bottom: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
`;
export const DeleteButton = styled.button`
height: ${p => p.theme.space[5]}px;
width: ${p => p.theme.space[6]}px;
background-color: ${p => p.theme.colors.white};
cursor: pointer;
border-radius: ${p => p.theme.radii.normal};
&:hover,
&:focus{
    background-color: violet;
}
`;

export const Tel = styled.span`
font-weight: ${p => p.theme.fontWeights.normal};
`;
export const StyledClipLoader = styled(ClipLoader)`
margin-right: ${p => p.theme.space[3]}px;
color:  ${p => p.theme.colors.accent};
`;
export const ListClipLoader = styled(ClipLoader)`
position: absolute;
color:  ${p => p.theme.colors.accent};
top: 50%;
left: 50%;
`;