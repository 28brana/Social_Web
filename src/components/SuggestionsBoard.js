import { Avatar, Button, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const RootStyle = styled('div')(({ theme }) => ({
    borderRadius: 8,
    // border: theme.palette.border,
    // background: theme.palette.background.default,
    width: "400px",
    padding: "20px"
}))
export default function SuggestionsBoard() {
    const theme = useTheme();
    return (
        <RootStyle>
            <Typography color={'text.disabled'} fontWeight={500}>Suggestions for you</Typography>
            <List>
                {
                    [...Array(5)].map((_, index) => (
                        <ListItem key={index} >
                            <Stack direction="row" alignItems={'center'} sx={{ width: '100%' }} >
                                <Avatar />
                                <ListItemText primary={<Typography variant='subtitle2' sx={{ lineHeight: '0.8' }}>Rohan Negi</Typography>} secondary={
                                    <Typography variant='caption' sx={{ color: theme.palette.text.disabled }}>Mutual Friend 5</Typography>
                                } sx={{ ml: '10px' }} />
                                <Button variant='text' sx={{ color: theme.palette.background.secondary, textTransform: 'capitalize' }} >Follow</Button>
                            </Stack>
                        </ListItem>
                    ))
                }

            </List>
        </RootStyle>
    )
}
