import { Button, Container, Divider, OutlinedInput, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function Login() {
    return (
        <Container>
            <Stack>
                <Typography variant='h4'>Welcome Back</Typography>
                <OutlinedInput placeholder="Enter username" />
                <OutlinedInput placeholder="Enter password" />
                <Typography variant='overline'>forget password</Typography>
                <Button variant='contained'>Sign in </Button>
                <Button variant='contained'>Sign in </Button>
                <Typography variant='overline'>forget password</Typography>
                <Divider />
                <Typography variant='overline'>Dont have a account sign up</Typography>
            </Stack>

        </Container>
    )
}
