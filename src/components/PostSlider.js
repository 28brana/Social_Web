import { memo } from "react";
import Slider from "react-slick";
import { styled, useTheme } from '@mui/material/styles';
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
function PostSlider({ children }) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    return (
        <StyledSlider {...settings} >
            {children}
        </StyledSlider>
    );
}

export default memo(PostSlider)