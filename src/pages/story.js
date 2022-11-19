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

export default function Story() {
    return (
        <RootStyle>

        </RootStyle>
    )
}
