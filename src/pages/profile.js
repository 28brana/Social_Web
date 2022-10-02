import { Avatar, Box, Button, Dialog, ImageList, ImageListItem, Stack, Tab, Tabs, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { BookmarkSimple, Chat, FireSimple, GridFour } from 'phosphor-react';
import { useState } from 'react';
import PostCard from '../components/PostCard';
import Layout from '../layouts';


const RootStyle = styled('div')(({ theme }) => ({

}))

const StyledItem = styled(ImageListItem)(({ theme }) => ({
    position: 'relative',
    '.overLay': {
        visibility: 'hidden',
        cursor: 'pointer',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#00000052',
        color: 'white',
    },
    ':hover': {
        '.overLay': {
            visibility: 'visible',
        }
    }

}))
Profile.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
export default function Profile() {
    const theme = useTheme();
    const [tab, setTab] = useState(0);
    const handleChangeTab = (e, newValue) => {
        setTab(newValue)
    }
    const [open, setDialog] = useState(false)

    return (
        <RootStyle>
            <Stack direction='row' p={5} spacing={10} alignItems='center' justifyContent={'center'}>
                <Avatar src={'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'} sx={{ height: '140px', width: '140px' }} />
                <Stack spacing={3}>
                    <Stack direction='row' spacing={2}>
                        <Typography variant='h4'>_bharatrana</Typography>
                        <Button variant='outlined' size={'small'} color='secondary'>Edit profile</Button>
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
                    <Box>
                        <pre>
                            Birthday 28-08-2001🎉 <br />
                            Real Name Bharat😃<br />
                            Loves K💘
                        </pre>
                    </Box>
                </Stack>
            </Stack>
            <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tab} onChange={handleChangeTab} centered
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"

                    >
                        <Tab label={
                            <Stack direction='row' alignItems={'center'} spacing={1}>
                                <GridFour size={20} />
                                <Typography variant={'subtitle2'}>Posts</Typography>
                            </Stack>
                        } value={0} sx={{ color: theme.palette.typography.grey }} />
                        <Tab label={
                            <Stack direction='row' alignItems={'center'} spacing={1}>
                                <BookmarkSimple size={20} />
                                <Typography variant={'subtitle2'}>Saved</Typography>
                            </Stack>
                        } value={1} sx={{ color: theme.palette.typography.grey }} />
                    </Tabs>
                </Box>
                <TabPanel value={tab} index={0} >
                    <ImageList cols={4} gap={16}  >
                        {itemData.map((item) => (
                            <StyledItem key={item.img} onClick={() => setDialog(true)} >
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <Box className='overLay'>
                                    <Stack direction='row' spacing={0.5}>
                                        <FireSimple size={24} weight='fill' />
                                        <Typography >21</Typography>
                                    </Stack>
                                    <Stack direction='row' ml={2} spacing={0.5}>
                                        <Chat size={24} weight='fill' />
                                        <Typography>30</Typography>
                                    </Stack>
                                </Box>


                            </StyledItem>
                        ))}
                    </ImageList>

                </TabPanel>
                <TabPanel value={tab} index={1} sx={{ color: 'red' }}>
                    <ImageList cols={4} gap={16}  >
                        {itemData.map((item) => (
                            <StyledItem key={item.img} onClick={() => setDialog(true)} >
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <Box className='overLay'>
                                    <Stack direction='row' spacing={0.5}>
                                        <FireSimple size={24} weight='fill' />
                                        <Typography >21</Typography>
                                    </Stack>
                                    <Stack direction='row' ml={2} spacing={0.5}>
                                        <Chat size={24} weight='fill' />
                                        <Typography>30</Typography>
                                    </Stack>
                                </Box>


                            </StyledItem>
                        ))}
                    </ImageList>
                </TabPanel>



            </Box>
            <Dialog onClose={() => setDialog(false)} open={open}>
                <PostCard data={post} />
            </Dialog>
        </RootStyle>
    )
}
const post = {
    userId: '1',
    name: 'prepInsta2023',
    profilePic: 'https://i.pravatar.cc/30',
    likes: 1550,
    descriptions: 'Yo Yo \n Honey Singh and \n Gippy',
    whoLikes: ['id', 'id', 'id'],
    time: '1hour',
    content: [
        {
            type: 'video',
            link: 'https://www.w3schools.com/html/mov_bbb.mp4',
        }, {
            type: 'video',
            link: 'https://www.w3schools.com/html/mov_bbb.mp4',
        }, {
            type: 'image',
            link: 'https://loremflickr.com/320/240',
        }, {
            type: 'image',
            link: 'https://loremflickr.com/320/240',
        },
    ]
};

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
                    {children}
                </Box>
            )}
        </div>
    );
}


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
];