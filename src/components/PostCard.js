import { styled, useTheme } from '@mui/material/styles';
const RootStyle = styled('div')(({ theme }) => ({
    borderRadius: 5,
    border: theme.palette.border,
}))
export default function PostCard() {
    return (
        <RootStyle>PostCard</RootStyle>
    )
}
