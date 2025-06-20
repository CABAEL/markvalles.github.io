import { Box, Card,Button, CardContent, Stack, Grid, Typography, Paper } from '@mui/material';
import mypic from '../img/me.png';
import Resume from '../resume/Mark_Valles.pdf'

const NameCard = ({ dimmed }) => {
  return (
    <>
      <Box
        component="img"
        src={mypic}
        alt="Mark Valles"
        sx={{
          width: '150px',
          height: '150px',
          objectFit: 'contain',
          borderRadius: '50%',
          boxShadow: dimmed ? 'none' : '-5px 8px 10px 5px #333',
        }}
      />

      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'tahoma',
          mt: 2
        }}
      >
        Mark Valles
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontStyle: 'italic',
          color: '#ccc',
        }}
      >
        System Analyst – Fullstack Developer
      </Typography>

      <a
        href="https://www.linkedin.com/in/mark-valles-bb7251246/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <Typography
          variant="caption"
          sx={{
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: '#ace',
            "&:hover": {
              color: '#fff',
              cursor: 'pointer',
            },
          }}
        >
          LinkedIn ^
        </Typography>
      </a>

      <Card
        sx={{
          maxWidth: 400,
          mx: "auto",
          bgcolor: "transparent", // Transparent background
          boxShadow: "none",       // Remove shadow for fully transparent look
          borderRadius: 3,
          color: "#f5f5f5",
        }}
      >
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="body2" sx={{ color: "#cccccc" }}>
              📧 Email: <strong style={{ color: "#ffffff" }}>vallesmark15@gmail.com</strong>
            </Typography>
            <Typography variant="body2" sx={{ color: "#cccccc" }}>
              📱 Contact: <strong style={{ color: "#ffffff" }}>+63 956 443 3716</strong>
            </Typography>
          </Stack>
        </CardContent>
      </Card>

    <a href={Resume} target='_blank'>
      <Button
        variant="outlined"
        color="primary"
        sx={{
          color: "#f5f5f5",
          borderColor: "#f5f5f5",
          borderRadius: 2,
          px: 3,
          py: 1,
          textTransform: "none",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
            borderColor: "#ffffff",
          },
        }}
      >
        Resume
      </Button>
    </a>


    </>
  );
};

export default NameCard;
