import { Avatar, Box, Stack, Typography, Tabs, Tab, tabsClasses, IconButton, Icon } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { ArrowArcLeft, CaretLeft, CaretRight } from 'phosphor-react';
import { useState } from 'react';
const RootStyle = styled('div')(({ theme }) => ({
    borderRadius: 8,
    borderColor: theme.palette.border,
    padding: theme.spacing(0.5),
    background: theme.palette.background.default,
}))
const ImageContainer = styled('div')(({ theme }) => ({
    backgroundOrigin: 'padding-box, border-box',
    backgroundRepeat: 'no-repeat', /* this is important */
    padding: 32,
    background: 'linear-gradient(to right,#A18CD1, #FBC2EB)',
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    margin: 'auto'

}))

const StyledIconButtonLeft = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '30%',
    zIndex: 9,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    background: theme.palette.background.neutral,
    ':hover': {
        background: theme.palette.background.neutral,
    }
}))
const StyledIconButtonRight = styled(IconButton)(({ theme }) => ({
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    zIndex: 9,
    position: 'absolute',
    top: '30%',
    right: 0,
    background: theme.palette.background.neutral,
    ':hover': {
        background: theme.palette.background.neutral,
    }
}))

const Story = ({ data }) => {
    const theme = useTheme()
    return (
        <Stack alignitem='center' spacing={1} justifyContent={'center'} >
            <ImageContainer sx={{
                ...(data.isSeen && {
                    background: theme.palette.text.disabled,
                })
            }}>
                <Avatar src={data.image} alt={data.name} sx={{
                    width: 56,
                    height: 56,
                    border: '1px solid white'
                }} />
            </ImageContainer>
            <Typography variant='caption' sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textAlign: 'center',
                ...(data.isSeen && {
                    color: theme.palette.text.disabled,
                }),
                color: theme.palette.text.primary

            }}>
                {data.name}
            </Typography>
        </Stack>
    )
}

export default function StoryBoard() {
    const [value, setValue] = useState(0);
    const handleChangeValue = (e, index) => {
        setValue(index);
        data[index].isSeen = true;
    }
    const theme = useTheme();
    return (
        <RootStyle>
            <Tabs
                value={value}
                onChange={handleChangeValue}
                variant="scrollable"
                aria-label="storys"
                scrollButtons
                sx={{
                    '.MuiTabs-indicator': {
                        display: 'none'
                    },
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0 },
                    },
                    'button': {
                        padding: 1
                    },
                    position: 'relative',
                }}
                ScrollButtonComponent={(props) => {
                    if (props.direction === 'left') {
                        return <StyledIconButtonLeft {...props}>
                            <CaretLeft size={16} color={theme.palette.icon.active} />
                        </StyledIconButtonLeft>
                    } else if (props.direction === 'right') {
                        return <StyledIconButtonRight {...props}>
                            <CaretRight size={16} color={theme.palette.icon.active} />
                        </StyledIconButtonRight>
                    } else {
                        return null;
                    }
                }}
            >
                {
                    data.map((element, index) => (
                        <Tab key={index} label={<Story data={element} />} />
                    ))
                }
            </Tabs>

        </RootStyle>
    )
}

const data = [
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: 'https://i.pravatar.cc/300',
        isSeen: false,
    },
]
