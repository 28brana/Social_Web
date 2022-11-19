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
                    <Typography variant='h4'>Forget Password </Typography>
                    <Stack mt={2} mb={4}>
                        <label htmlFor="username">Enter Email or phone Number</label>
                        <OutlinedInput placeholder="Enter username" id="username" />
                    </Stack>

                    <Button variant='contained' color="secondary">Send Link </Button>
                    <Stack alignItems={'center'} mt={2}>
                        <Typography variant='overline'>Dont have a account ?
                            <Link href={'./register'}>
                                sign up
                            </Link>
                        </Typography>
                        <Link href={'./login'}>
                            <Typography variant='overline' sx={{ cursor: 'pointer' }}>Go to Login</Typography>
                        </Link>
                    </Stack>
                </Stack>
            </RootStyle>

        </Container>
    )
}
