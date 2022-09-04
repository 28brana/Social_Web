import { Avatar, Box, Stack, Typography, Tabs, Tab, tabsClasses } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { ArrowArcLeft } from 'phosphor-react';
import { useState } from 'react';
const RootStyle = styled('div')(({ theme }) => ({
    borderRadius: 5,
    border: '1px solid',
    borderColor: theme.palette.border,
    padding: theme.spacing(2),
    background: theme.palette.background.default
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

const Story = ({ data }) => {
    const theme = useTheme()
    return (
        <Stack alignItem='center' spacing={1} justifyContent={'center'} >
            <ImageContainer sx={{
                ...(data.isSeen && {
                    background: theme.palette.text.disabled,
                })
            }}>
                <Avatar alt={data.name} sx={{
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
                })

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
    return (
        <RootStyle>
            <Tabs
                value={value}
                onChange={handleChangeValue}
                variant="scrollable"
                aria-label="storys"
                textColor='text.primary'
                scrollButtons
                sx={{
                    '.MuiTabs-indicator': {
                        display: 'none'
                    },
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                    },
                    'button': {
                        padding: 1
                    }
                }}>
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
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
    {
        name: 'Jai Sharma',
        image: '',
        isSeen: false,
    },
]
