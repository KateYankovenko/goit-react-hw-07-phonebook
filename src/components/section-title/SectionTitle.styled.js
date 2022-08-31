import styled from '@emotion/styled';

export const SecondaryTitle = styled.h2`
text-align: center;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.title};
margin-top: ${p => p.theme.space[4]}px;
margin-bottom: ${p => p.theme.space[4]}px;
`;