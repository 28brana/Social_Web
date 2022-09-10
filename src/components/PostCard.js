import { Avatar, Typography, Stack, Box, Button, TextField, CardMedia, Card, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { BookmarkSimple, Chat, DotsThreeVertical, Fire, FireSimple, PaperPlaneTilt, SpeakerSimpleHigh, SpeakerSimpleSlash } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import { testVideoUrl } from '../config';
import PostCommentDialogBox from './PostCommentDialogBox';
import PostComments from './PostComment';
import PostDialogBox from './PostDialogBox';
import PostSlider from './PostSlider';
// import myVideo from '../assets/video.mp4'
const RootStyle = styled('div')(({ theme }) => ({
    borderRadius: 8,
    border: theme.palette.border,
    background: theme.palette.background.default,

}))
const ProfileContainer = styled('div')(({ theme }) => ({
    backgroundOrigin: 'padding-box, border-box',
    backgroundRepeat: 'no-repeat', /* this is important */
    padding: 3,
    background: 'linear-gradient(to right,#A18CD1, #FBC2EB)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',

}))

const ImageContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    height: '360px',
    width: '100%',
}))
const Description = styled('pre')(({ theme }) => ({
    width: '100%',
    whiteSpace: 'pre-wrap',
    margin: 0,

}))

const StyledMoreBtn = styled('span')(({ theme }) => ({
    color: theme.palette.text.disabled,
    cursor: 'pointer'
}))

const StyledVideo = styled('video')(({ theme }) => ({
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    maxHeight: '50vh',
    [theme.breakpoints.down('md')]: {

    },
}))

const StyledMuteButton = styled('div')(({ theme }) => ({
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: '50%',
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    background: '#262626',
}))
const StyledIconContainer = styled(Box)(({ theme }) => ({
    borderRadius: '50%',
    width: 30,
    height: 30,
    zIndex: 9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    ':hover': {
        color: theme.palette.icon.neutral,
    }
}))

const VideoComponent = ({ src, isMute, handleToggleMute }) => {
    const Options = {
        threshold: 0.8
    }
    const videoRef = useRef(null);
    const handleMute = () => {
        handleToggleMute();
        videoRef.current.muted = !isMute;
    }

    const { inViewport } = useInViewport(videoRef, Options);
    useEffect(() => {
        if (inViewport) {
            // console.log("play ");
            videoRef.current.play();
        } else {
            videoRef.current.pause();
            // console.log("pause ");
        }
        return () => {
            videoRef.current?.pause();
        }
    }, [inViewport])

    // 1. Audio useState make globally one for all
    // 2. one video play rest will stop
    return (
        <Box sx={{ position: 'relative', maxHeight: '50vh' }}>
            <StyledVideo
                ref={videoRef}
                src={src}
                loop
                autoPlay
                muted={true}
                playsInline //FIX iOS black screen
            />
            <StyledMuteButton onClick={handleMute}>
                {
                    isMute ?
                        <SpeakerSimpleSlash size={16} color={'#FFFFFF'} weight="fill" />
                        :
                        <SpeakerSimpleHigh size={16} color={'#FFFFFF'} weight="fill" />
                }
            </StyledMuteButton>
        </Box>
    )
}





export default function PostCard({ isMute, handleToggleMute }) {
    const theme = useTheme();
    const text = 'Hi every one yes its me  \nhow are u okay fine \nno need to say';
    const [isCollapse, setIsCollapse] = useState(true);
    const handleCollapse = () => {
        setIsCollapse(false)
    }
    const [comment, setComment] = useState('');
    const handleChangeComment = (e) => {
        setComment(e.target.value);
    }

    let summery = `${text.split('\n')[0]}...`;


    const [like, setLike] = useState(false);
    const handleToggleLike = () => {
        setLike(!like);
    }

    const [open, setOpen] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    const handleOpenComment = () => {
        setOpenComment(true);
    }
    const handleCloseComment = () => {

        setOpenComment(false);
    }
    const handleOpenDialog = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <RootStyle>
            <Stack direction="row" p={1} alignItems={'center'} justifyContent={'space-between'}>
                <Stack direction="row" spacing={1.5}>
                    <ProfileContainer>
                        <Avatar src={'https://i.pravatar.cc/30'} sx={{ border: '2px solid transparent' }} alt={'img'} />
                    </ProfileContainer>
                    <Box>
                        <Typography variant='body2'>prepinsta2023</Typography>
                        <Typography variant='caption' color='typography.subtitle2'>1hour</Typography>
                    </Box>
                </Stack>
                <StyledIconContainer onClick={handleOpenDialog}>
                    <DotsThreeVertical size={24} />
                </StyledIconContainer>
            </Stack>
            <PostSlider>
                <VideoComponent src={testVideoUrl} isMute={isMute} handleToggleMute={handleToggleMute} />
                <VideoComponent src={testVideoUrl} isMute={isMute} handleToggleMute={handleToggleMute} />
                <ImageContainer>
                    <Image src={'https://loremflickr.com/320/240'} layout="fill" objectFit="cover" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={'https://loremflickr.com/320/240'} layout="fill" objectFit="cover" />
                </ImageContainer>
            </PostSlider>


            <Stack py={1} px={2} spacing={2}>
                <Stack direction={'row'} justifyContent={'space-between'} >
                    <Stack direction={'row'} spacing={2}>

                        <StyledIconContainer onClick={handleToggleLike}>
                            {
                                like ?
                                    <FireSimple size={24} color="#fa0000" weight="fill" />

                                    : <Fire size={24} onClick={handleToggleLike} />
                            }
                        </StyledIconContainer>
                        <StyledIconContainer onClick={handleOpenComment}>
                            <Chat size={24} />
                        </StyledIconContainer>
                        <StyledIconContainer>
                            <PaperPlaneTilt size={24} />
                        </StyledIconContainer>
                    </Stack>
                    <StyledIconContainer>
                        <BookmarkSimple size={24} />
                    </StyledIconContainer>
                </Stack>
                <Typography variant='subtitle2' >1,550 likes</Typography>
                <Typography variant='body2' component={'div'} >
                    {
                        isCollapse ? <Description>
                            {summery} <StyledMoreBtn onClick={handleCollapse} >more</StyledMoreBtn>
                        </Description> : <Description>
                            {text}
                        </Description>
                    }
                </Typography>
                <Stack direction={'row'} alignItems={'center'} py={1} sx={{
                    borderTop: '1px solid',
                    borderColor: theme.palette.border
                }} spacing={1}>
                    <Avatar src="https://i.pravatar.cc/300" alt="pic" />
                    <TextField
                        fullWidth
                        variant='standard'
                        maxRows={3}
                        InputProps={{
                            disableUnderline: true,
                            style: {
                                fontSize: '14px'
                            }
                        }}
                        placeholder="Add a comment..."
                        onChange={handleChangeComment}
                        value={comment}
                        multiline
                    />
                    <Button variant="text" color="info" disabled={comment === ''} sx={{
                        textTransform: 'capitalize'
                    }}>Post</Button>
                </Stack>
            </Stack>
            <PostDialogBox open={open} onClose={handleClose} />
            <PostCommentDialogBox open={openComment} onClose={handleCloseComment} />
        </RootStyle>
    )
}
