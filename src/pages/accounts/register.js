import { Button, Container, Divider, OutlinedInput, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from '@mui/material/styles';

import Link from "next/link";
const RootStyle = styled('Box')(({ theme }) => ({

    background: theme.palette.background.neutral,
    borderRadius: 8,
    padding: 30,
    [theme.breakpoints.up('md')]: {
        width: "60%"
    },
    width: "100%",
    'input': {
        background: "white",
    }
}))
export default function Register() {
    return (
        <StepOne />
    )
}


const StepOne = () => {
    return (
        <Container sx={{
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <RootStyle>
                <Stack >
                    <Typography variant='h4'>SignUp </Typography>
                    <Stack mt={2}>
                        <label htmlFor="username">User Name</label>
                        <OutlinedInput placeholder="Enter username" id="username" />
                    </Stack>
                    <Stack mt={2} >
                        <label htmlFor="email">Email or Phone</label>
                        <OutlinedInput placeholder="Enter Email or Phone" id="email" />
                    </Stack>
                    <Stack mt={2} >
                        <label htmlFor="password">Password</label>
                        <OutlinedInput placeholder="Enter password" id="password" />
                    </Stack>
                    <Stack mt={2} mb={4}>
                        <label htmlFor="otp">OTP</label>
                        <OutlinedInput placeholder="Enter OTP" id="otp" />
                    </Stack>
                    <Button variant='contained' color="secondary">Create Account</Button>
                    <Stack alignItems={'center'} mt={2}>
                        <Typography variant='overline'>Already have account ?
                            <Link href={'./login'}>
                                Login
                            </Link>
                        </Typography>
                    </Stack>
                </Stack>
            </RootStyle>

        </Container>
    );
}