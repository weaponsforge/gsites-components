const styles = {
  tabs: {
    '& .MuiTabs-indicator': {
      border: theme => `2px solid ${theme.palette.secondary.main}`,
      backgroundColor: theme => theme.palette.primary.dark,
      borderShadow: `
      rgb(255 255 255) 0px 0px 0px 0px,
      rgb(0 0 0 / 5%) 0px 0px 0px 1px,
      rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%)
      0px 4px 6px -2px !important`
    },
  }
}

export default styles
