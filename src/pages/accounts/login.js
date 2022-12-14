import { Button, Container, Divider, OutlinedInput, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from '@mui/material/styles';
import Link from "next/link";

const RootStyle = styled('Box')(({ theme }) => ({

    background: theme.palette.background.neutral,
    borderRadius: 8,
    [theme.breakpoints.up('md')]: {
        padding: 30,
        width: "60%"
    },
    width: "100%",
    'input': {
        background: "white",
    }
}))

export default function Login() {
    return (
        <Container sx={{
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <RootStyle>
                <Stack>
                    <Typography variant='h4'>Login </Typography>
                    <Stack mt={2}>
                        <label htmlFor="username">User Name</label>
                        <OutlinedInput placeholder="Enter username" id="username" />
                    </Stack>
                    <Stack mt={2} mb={4}>
                        <label htmlFor="username">Password</label>
                        <OutlinedInput placeholder="Enter password" id="password" />
                    </Stack>
                    <Button variant='contained' color="secondary">Login in </Button>
                    <Stack alignItems={'center'} mt={2}>
                        <Typography variant='overline'>Dont have a account ?
                            <Link href={'./register'}>
                                sign up
                            </Link>
                        </Typography>
                        <Link href={'./forgetpassword'}>
                            <Typography variant='overline' sx={{ cursor: 'pointer' }}>forget password</Typography>
                        </Link>
                    </Stack>
                </Stack>
            </RootStyle>

        </Container>
    )
}
