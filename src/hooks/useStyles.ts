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
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
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
  sidebar: { position: 'sticky', top: 0 }
})
