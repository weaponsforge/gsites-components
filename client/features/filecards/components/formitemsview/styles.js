const styles = {
  container: {
    marginTop: (theme) => theme.spacing(3),
    '& h6': {
      marginBottom: '16px'
    },
    '& .MuiTypography-caption': {
      color: (theme) => theme.palette.text.secondary
    }
  },
  infoContainer: {
    marginTop: '32px',
    p: {
      marginBottom: '16px',
      overflowWrap: 'break-word'
    }
  },
  iframeEmbedContainer: {
    marginTop: '6px',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& a': {
      color: (theme) => theme.palette.tertiary.main,
      textDecoration: 'none'
    },
    '& a:hover': {
      textDecoration: 'underline'
    },
    '& button': {
      height: '100%',
      border: 'none'
    }
  }
}

export default styles
