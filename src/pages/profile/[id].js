import { Avatar, Box, Button, Container, Divider, FormControl, FormHelperText, Input, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { ArrowLeft } from 'phosphor-react';
import { useRouter } from 'next/router';

// password
// profile
// boi
// email
// phone

const RootStyle = styled(Container)(({ theme }) => ({
    background: theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
        width: '50%',
    },
    'input': {
        background: 'white'
    }
}));
const StyledContainer = styled('div')(({ theme }) => ({
    background: theme.palette.background.neutral,

}));

export default function EditProfile() {
    const router = useRouter()

    return (
        <StyledContainer >

            <RootStyle>
                <Stack
                    direction='row'
                    alignItems={'center'}
                    gap={1}
                    onClick={() => router.back()}
                    sx={{ cursor: 'pointer' }}>
                    <ArrowLeft size={36} weight='bold' />
                    <Typography variant='h4' fontWeight={600}> Edit Profile</Typography>
                </Stack>
                <Stack mt={4}>
                    <form>
                        <Stack alignItems={'center'}>
                            <Avatar sx={{ width: '100px', height: '100px' }} />
                            <Typography variant='caption' color='blue'>Change Photo</Typography>
                        </Stack>
                        <LabelTextField
                            label={'Username'}
                            disabled={true}
                        />
                        <LabelTextField
                            label={'Bio'}
                            isRequired={true}
                            multiline={true}
                            maxRows={4}
                            size={'large'}

                        />
                        <LabelTextField
                            label={'Email'}
                            isRequired={true}
                        />
                        <LabelTextField
                            label={'Phone'}
                            isRequired={true}
                        />
                        <Button
                            variant='contained'
                            color='secondary'
                            sx={{
                                margin: '20px 0',
                            }}
                        >Submit</Button>
                    </form>
                    <Divider sx={{ marginBottom: 4 }} />
                    <form>
                        <Typography variant='h6' mb={2}>Change Password</Typography>
                        <LabelTextField
                            label={'Old password'}
                            isRequired={true}
                        />
                        <LabelTextField
                            label={'New password'}
                            isRequired={true}
                        />
                        <Button variant='contained' color='secondary' sx={{ margin: '20px 0' }} >Submit</Button>
                    </form>
                </Stack>
            </RootStyle>
        </StyledContainer>
    )
}


const LabelTextField = ({ label, isRequired, ...props }) => {
    const theme = useTheme();
    return (
        <Stack my={2}>
            <label>
                {label}
                {
                    isRequired && (<span style={{ color: 'red' }}>*</span>)
                }

            </label>
            <TextField variant='filled' size='small' required={isRequired} {...props} sx={{
                '.MuiInputBase-root': {
                    background: theme.palette.background.default,
                },
                '.MuiInputBase-input': {
                    paddingTop: '12px',
                    background: theme.palette.background.default,
                },
                '.Mui-disabled': {
                    background: theme.palette.background.neutral,
                }
            }} />
        </Stack>
    );

}