import { Box } from '@mui/material';
import EmojiPicker from 'emoji-picker-react';
import { Smiley } from 'phosphor-react'
import React, { useState } from 'react'

export default function EmojiButton({ onChange }) {
    const [show, setShow] = useState(false);

    return (
        <Box sx={{
            position: 'relative',
            cursor: 'pointer',

        }} >
            {show && <Box sx={{
                position: 'absolute',
                bottom: 45,
            }}>
                <EmojiPicker onEmojiClick={onChange} />
            </Box>}
            <Box sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
            }}
                onClick={() => setShow(!show)} >
                <Smiley size={24} color='#717171' />
            </Box>
        </Box>
    )
}
