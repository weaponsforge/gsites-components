import Paper from '@mui/material/Paper'

function SectionComponent ({ children }) {
  return (
    <Paper
      elevation={0}
      sx={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 240,
        marginTop: '24px',
        border: 'none',
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px'
      }}
    >
      {children}
    </Paper>
  )
}

export default SectionComponent
