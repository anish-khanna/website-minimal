import './index.css';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

function NotFound() {

  return (
      <div className="notfound-root">
        <Grid container justify="center" alignItems="center" className="notfound-container">
          <Grid item>
            <h1 className="label">
              404
            </h1>
            <p>
              The requested page could not be found.
            </p>
            <Link to='/'>
              <HomeIcon fontSize="large" className="homeIcon" />
            </Link>
          </Grid>
        </Grid>
      </div>
  )
}

export default NotFound;