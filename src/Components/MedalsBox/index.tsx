import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import AvatarOlimpiada from "../../../Assets/olimpiadas.jpeg";
import { RiMedalLine } from "react-icons/ri";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export interface Athlets {
  Athlets: Athlet[];
}

interface Athlet {
  name: String;
  country: String;
  sex: String;
  event: String;
  medal: String;
}

export function MedalsBox(Athlet: Athlet) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={AvatarOlimpiada}
          title="Logo Olimpíada"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Athlet.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Athlet.sex}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Athlet.event}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <RiMedalLine />
        </Button>
        <Button size="small" color="primary">
          {Athlet.country}
        </Button>
      </CardActions>
    </Card>
  );
}
