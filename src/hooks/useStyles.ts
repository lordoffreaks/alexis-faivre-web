import { makeStyles } from '@material-ui/core/styles'

export const centered = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)'
}

export const burgerStyles = {
  topHeight: '12px',
  iconHeight: '30px',
  iconsWidth: '36px',
  iconsColor: '#bdc3c7'
}

export const useStyles = makeStyles({
  inline: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0
  },
  section: {
    margin: '250px 0'
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '3em 3em',
    '& h3': {
      marginTop: 0
    }
  },
  header: {
    position: 'relative',
    textAlign: 'center',
    top: `calc(${burgerStyles.topHeight} + ${burgerStyles.iconHeight})`,
    '@media (min-width: 600px)': {
      top: burgerStyles.topHeight
    }
  },
  videoImageContainer: { position: 'relative', cursor: 'pointer' },
  videoImageItem: {
    zIndex: 1,
    margin: 'auto',
    position: 'absolute',
    top: '0',
    bottom: '0' /* vertical center */,
    left: '0',
    right: '0' /* horizontal center */
  },
  videoImageTitle: { textAlign: 'center', padding: '.5em 0' },
  sidebar: { position: 'sticky', top: 0 },
  navMenu: {
    paddingLeft: 0,
    listStyleType: 'none'
  },
  navMenuItem: {
    marginBottom: '1.5em',
    cursor: 'pointer'
  },
  navMenuText: {
    paddingBottom: '5px',
    '&:hover': {
      borderBottom: '2px solid rgb(104, 166, 147)',
      fontWeight: 'bold'
    }
  },
  navMenuTextSelected: {
    borderBottom: '2px solid rgb(104, 166, 147)',
    fontWeight: 'bold'
  }
})
