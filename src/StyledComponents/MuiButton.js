import { styled } from '@mui/system';

const MuiButton = styled('Button')({
    backgroundColor: 'rgba(80, 118, 163, 1)',
    color: '#fff',
    //color: "#66a1e8",
    padding: '10px 20px',
    borderRadius: 4,
    // fontWeight: 700,
    '&:hover': {
        cursor: 'pointer'
    }
})

export default MuiButton;