const styles = {
  tab: {
    color: '#fff',
    textTransform: 'capitalize',
    '&:hover': {
      color: '#fff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#fff',
      fontWeight: theme => theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }
}

export default styles
