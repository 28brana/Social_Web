import { Avatar, Box, Button, Checkbox, Dialog, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { styled, useTheme } from '@mui/material/styles';
import { CheckCircle, Circle } from "phosphor-react";

const data = [
    {
        id: '1',
        photoUrl: 'https://i.pravatar.cc/300',
        name: 'Kunal Kumar',
    }, {
        id: '2',
        photoUrl: 'https://i.pravatar.cc/300',
        name: 'Kunal Kumar',
    }
]

const Description = styled('div')(({ theme }) => ({

}))
export default function ShareDialogBox({ open, onClose }) {
    const [selected, setSelected] = useState([]);
    const handleChange = (value) => {
        let arr = [...selected];
        let index = arr.findIndex((val) => val === value);
        if (index === -1) {
            arr.push(value);
        } else {
            arr.splice(index, 1);
        }
        setSelected(arr);
    }

    // console.log(selected);
    const theme = useTheme();

    return (
        <Dialog onClose={onClose} open={open} maxWidth='xs' fullWidth>
            <Box>

                <List sx={{ p: 0 }}>
                    {
                        data.map((element, index) => {
                            const isSelected = selected.findIndex((val) => val === element.id) === -1 ? false : true;
                            return (
                                <ListItemButton selected={isSelected}
                                    key={index}
                                    onClick={() => handleChange(element.id)}>
                                    <ListItemAvatar>
                                        <Avatar>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={element.name} />
                                    {
                                        isSelected ? <CheckCircle size={32} weight="fill" color="blue" /> : <Circle size={32} />
                                    }
                                </ListItemButton>
                            )
                        })
                    }
                </List>
            </Box>
            <Button variant="contained" color="info" sx={{
                textTransform: 'capitalize'
            }}>Send</Button>

        </Dialog>
    )
}
