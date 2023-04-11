const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    overflowY: 'hidden'
  },
  subContainer: {
    height: '100%',
    '& .MuiCard-root:hover': {
      boxShadow: '5px 0px 20px rgba(0, 0, 0, .2)'
    },
    '& .loadingspinner': {
      textAlign: 'center',
      padding: '48px'
    }
  },
  card: {
    width: '345',
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'box-shadow 0.5s'
  },
  subTitle: {
    fontSize: '3.5vh',
    textAlign: 'center',
    a: {
      color: (theme) => theme.palette.primary.main,
      textDecoration: 'none'
    },
    'a:hover': {
      textDecoration: 'underline'
    },
    'a:visited': {
      color: (theme) => theme.palette.primary.secondary,
      textDecoration: 'none'
    }
  },
  button: {
    color: 'green',
    fontSize: '3vh',
    width: '50%',
    height: '-webkit-fill-available',
    minWidth: {
      xs: 'unset'
    }
  }
}

export default styles
