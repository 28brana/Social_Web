// mui
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// next
import Image from 'next/image';
// icon
import { SpeakerSimpleHigh, SpeakerSimpleSlash } from 'phosphor-react';
// hooks
import { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInViewport } from 'react-in-viewport';
// Slick slider
import Slider from "react-slick";
// redux slice
import { toggleMute } from '../redux/slices/common';

// -------------------------------------------------------------
const StyledSlider = styled(Slider)(() => ({
    '.slick-prev': {
        left: 0,
        zIndex: 1
    },
    '.slick-next': {
        right: 0,
        zIndex: 1
    },
    '.slick-disabled': {
        display: 'none !important'
    },
    '.slick-dots': {
        'button': {
            width: 10,
            padding: 0
        },
        'li': {
            width: 12,
            margin: 0
        },
    },
    '.slick-active': {
        'button::before': {
            color: 'purple !important',
        },
    }
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
const StyledVideo = styled('video')(({ theme }) => ({
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    maxHeight: '50vh',
    [theme.breakpoints.down('md')]: {

    },
}))
const ImageContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    height: '360px',
    width: '100%',
}))

// Component ---------------------------------------------------
const VideoComponent = memo(({ src, inViewport, isCurrent }) => {
    // states
    const [playing, setPlaying] = useState(false);
    const isMute = useSelector((state) => state.common.isMute);
    const dispatch = useDispatch();
    const videoRef = useRef(null);
    // functions
    const handleMute = () => {
        videoRef.current.muted = !isMute;
        dispatch(toggleMute());
    }
    const play = () => {
        videoRef.current.play().then(() => {
            setPlaying(true);
            videoRef.current.muted = isMute;
        }).catch((err) => {
            console.log(err);
        })
    }
    // UseEffect
    useEffect(() => {
        if (!videoRef.current) {
            return;
        }

        if (isCurrent && inViewport) {
            if (!playing) {
                play();
            }
            // console.log("Play", isCurrent);
        } else {
            if (playing) {
                videoRef.current.pause();
                // console.log("Pause", isCurrent);

            }
            setPlaying(false);
        }

    }, [inViewport, isCurrent])

    return (
        <Box sx={{ position: 'relative', maxHeight: '50vh' }}>
            <StyledVideo
                ref={videoRef}
                src={src}
                loop
                muted
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
})

const ContentComponent = memo(({ link, type, inViewport, isCurrent }) => {
    return (
        type === 'video' ?
            <VideoComponent src={link} inViewport={inViewport} isCurrent={isCurrent} /> :
            <ImageContainer>
                <Image src={link} layout="fill" objectFit="cover" />
            </ImageContainer>
    )

})
function PostSlider({ content }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Ref to viewport
    const Options = {
        threshold: 0.8
    }
    const boxRef = useRef(null);
    const { inViewport } = useInViewport(boxRef, Options);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        beforeChange: function (_, nextSlide) {
            setCurrentIndex(nextSlide);
        },
    };

    return (
        <div ref={boxRef}>

            <StyledSlider {...settings} >
                {
                    content.map((element, index) => (
                        <ContentComponent key={index} {...element} inViewport={inViewport} isCurrent={index === currentIndex} />
                    ))
                }
            </StyledSlider>
        </div>

    );
}

export default memo(PostSlider);