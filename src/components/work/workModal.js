import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WorkImages from './WorkImages';
import CloseIcon from '@mui/icons-material/Close';
import '../css/workModal.css';
import { Height } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 700,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: '3px',
    boxShadow: 24,
    p: 0,

    // Media query for smaller screens
    '@media (max-width: 1024px)': {
        maxWidth: '40%',
        width: 'auto',
        // maxWidth: '80%', // Adjust the maximum width for smaller screens
        // maxHeight: '60%',
    },

    // Additional media queries for even smaller screens if needed
    '@media (max-width: 480px)': {
        maxWidth: 300, // Further adjust the maximum width for very small screens
    },
};

const WorkModal = ({
    title,
    subtitle,
    description,
    imageArray,
    link,
    linkType,
    onClose,
}) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Card sx={style}>
            <WorkImages imageArray={imageArray} />
            <CardContent>
                <div className='titleContainer'>
                    <Typography gutterBottom variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant='subtitle1'
                        component='div'
                        sx={{ color: '#c0c0c0' }}
                    >
                        {subtitle}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Button size='small' onClick={handleClick}>
                    {linkType}
                </Button>
                <Button size='small' onClick={handleClose}>
                    <CloseIcon />
                </Button>
            </CardActions>
        </Card>
    );
};

export default WorkModal;
