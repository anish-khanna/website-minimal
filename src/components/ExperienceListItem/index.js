import './index.css';
import { Grid, ListItem, ListItemAvatar, Avatar, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
  }
});

function ExperienceListItem(props) {
  const {
    image,
    company,
    position,
    dateString,
    link,
  } = props;

  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start" className="root">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3} md={2}>
          <ListItemAvatar className="list-avatar">
            <Button onClick={() => window.open(link)}>
              <Avatar alt={company} variant="rounded" src={image} classes={{
                root: classes.root
              }}/>
            </Button>
          </ListItemAvatar>
        </Grid>
        <Grid item container xs={9} md={10}>
          <Grid item xs={12} md={7}>
            <a href={link} target="_blank" rel="noreferrer" onMouseOver={event => event.target.style.color='#b30000'} onMouseOut={(event) => event.target.style.color='#f50057'}>
              <h3 className="company-name">{company}</h3>
            </a>
            <p className="position">{position}</p>
          </Grid>
          <Grid item xs={12} md={5} className="date-parent">
            <p className="date">{dateString}</p>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default ExperienceListItem;