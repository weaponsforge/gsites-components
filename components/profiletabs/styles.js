const styles = {
  headerContainer: {
    backgroundColor: theme => theme.palette.primary.main,
    height: '270px'
  },
  headerContent: {
    paddingBottom: 0,
    '& h1': {
      lineHeight: '60px',
    },
    '& h1, h3, h4': {
      color: '#fff',
      fontFamily: 'Bebas Neue',
      fontWeight: 'normal'
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  headerTitle: {
    marginTop: theme => theme.spacing(9),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& button': {
      height: '50px',
      backgroundColor: theme => theme.palette.primary.light,
      '&:hover': {
        backgroundColor: '#fff'
      }
    }
  }
}

export default styles
