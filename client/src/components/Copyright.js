import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Salve
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
