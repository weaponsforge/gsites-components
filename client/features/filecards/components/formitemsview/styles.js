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
  iframeEmbedContainer: (theme) => ({
    marginTop: '6px',
    padding: '4px',
    paddingLeft: '8px',
    borderRadius: '8px',
    border: '1px solid lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    wordBreak: 'break-all',
    '& a': {
      color: theme.palette.tertiary.main,
      textDecoration: 'none'
    },
    '& a:hover': {
      textDecoration: 'underline'
    },
    '& button': {
      height: '100%',
      border: 'none',
      backgroundColor: theme.palette.primary.light
    },
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      '& .MuiTypography-root': {
        marginBottom: '8px'
      }
    },
    [theme.breakpoints.between('900', '1100')]: {
      display: 'grid',
      '& .MuiTypography-root': {
        marginBottom: '8px'
      }
    }
  })
}

export default styles
