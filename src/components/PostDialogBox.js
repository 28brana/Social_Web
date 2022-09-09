import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';

const optionsList = [
    {
        title: 'report'
    }, {
        title: 'unFollow'
    }, {
        title: 'block'
    }, {
        title: 'copy'
    }, {
        title: 'cancel'
    }
]

export default function PostDialogBox({ open, onClose }) {
    const theme = useTheme();
    return (
        <Dialog onClose={onClose} open={open} maxWidth='xs' fullWidth>
            <List sx={{ p: 0 }}>
                {optionsList.map((element, index) => (
                    <ListItem button onClick={() => handleListItemClick(element)} key={index} sx={{
                        borderBottom: "1px solid",
                        borderColor: theme.palette.border,
                        textAlign: 'center'
                    }}>
                        <ListItemText primary={element.title} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}
