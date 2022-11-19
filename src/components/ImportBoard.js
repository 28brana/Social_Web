import { Avatar, Box, Stack, Typography, } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Image } from 'phosphor-react';

import { useState } from 'react';
const RootStyle = styled('div')(({ theme }) => ({
    borderRadius: 8,
    borderColor: theme.palette.border,
    padding: theme.spacing(0.5),
    background: theme.palette.background.default,
}))
export default function ImportBoard() {
    return (
        <RootStyle>
            <Avatar src={'s'} alt={'n'} sx={{
                width: 56,
                height: 56,
                border: '1px solid white'
            }} />
            <Stack>
                <Image size={32} color="#707070" />
                <Typography>Photo</Typography>
            </Stack>
        </RootStyle>
    )
}
