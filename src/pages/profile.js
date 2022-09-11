import { Avatar, Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { GridFour } from 'phosphor-react';
import { useState } from 'react';
import Layout from '../layouts';


const RootStyle = styled('div')(({ theme }) => ({

}))

Profile.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
export default function Profile() {
    const [tab, setTab] = useState(0);
    const handleChangeTab = (e, newValue) => {
        setTab(newValue)
    }
    return (
        <RootStyle>
            <Stack direction='row' p={5} spacing={10} alignItems='flex-start'>
                <Avatar sx={{ height: '140px', width: '140px' }} />
                <Stack spacing={3}>
                    <Stack direction='row'>
                        <Typography variant='h4'>_bharatrana</Typography>
                        <Button variant='outlined' size={'small'}>Edit profile</Button>
                    </Stack>
                    <Stack direction='row' spacing={3}>
                        <Stack direction='row' spacing={0.5}>
                            <Typography variant='subtitle2'>11</Typography>
                            <Typography variant='subtitle2'>post</Typography>
                        </Stack>
                        <Stack direction='row' spacing={0.5}>
                            <Typography variant='subtitle2'>130</Typography>
                            <Typography variant='subtitle2'>follweres</Typography>
                        </Stack>
                        <Stack direction='row' spacing={0.5}>
                            <Typography variant='subtitle2'>138</Typography>
                            <Typography variant='subtitle2'>following</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tab} onChange={handleChangeTab} centered>
                        <Tab label={
                            <Stack direction='row' alignItems={'center'}>
                                <GridFour size={20} />
                                <Typography variant={'subtitle2'}>Posts</Typography>
                            </Stack>
                        } value={0} />
                        <Tab label={
                            <Stack direction='row' alignItems={'center'}>
                                <GridFour size={20} />
                                <Typography variant={'subtitle2'}>Saved</Typography>
                            </Stack>
                        } value={1} />
                    </Tabs>
                </Box>
                <TabPanel value={tab} index={0}>Item One</TabPanel>
                <TabPanel value={tab} index={1}>Item Two</TabPanel>



            </Box>
        </RootStyle>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

