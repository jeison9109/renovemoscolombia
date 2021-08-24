import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ejecutivo1 from "../Images/ejecutivo (1).jpg";
import ejecutivo2 from "../Images/ejecutivo (2).jpg";
import ejecutivo3 from "../Images/ejecutivo (3).jpg";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UncontrolledLottie2 from "../Components/UncontrolledLottie2";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const useStyles2 = makeStyles({
  root1: {
    maxWidth: 345,
    marginTop: 20,
  },
  media: {
    height: 370,
  },
});

const DireccionNacional = () => {
  const classes = useStyles1();
  const classes1 = useStyles2();

  return (
    <div className="efecto">
      <div className={classes.root} className="efecto">
        <div className="titulo-1">
          <h1 className="animate__animated animate__heartBeat">
            DIRECCION NACIONAL
          </h1>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Card className={classes1.root1}>
              <CardActionArea>
                <CardMedia
                  className={classes1.media}
                  image={ejecutivo1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Direcctor General
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Gustavo Andres Guio<br></br> Abogado especialista en Derecho
                    Administrativo
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Card className={classes1.root1}>
              <CardActionArea>
                <CardMedia
                  className={classes1.media}
                  image={ejecutivo2}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sub Director(a)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    overadagadgadfadgadgdadga
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Card className={classes1.root1}>
              <CardActionArea>
                <CardMedia
                  className={classes1.media}
                  image={ejecutivo3}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Secretario Administrativo
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Card className={classes1.root1}>
              <CardActionArea>
                <CardMedia
                  className={classes1.media}
                  image={ejecutivo1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Abogado
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Card className={classes1.root1}>
              <CardActionArea>
                <CardMedia
                  className={classes1.media}
                  image={ejecutivo1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Card className={classes1.root1}>
              <CardActionArea>
                <CardMedia
                  className={classes1.media}
                  image={ejecutivo1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
        <div className="footer-1">
          <UncontrolledLottie2 />
          <p>Contactanos: Whatsapp +57 316 8215321</p>
          <p>Siguenos en nuestras redes sociales...</p>
          <div className="top-redes">
            <a href="">
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ fontSize: "1.5rem", color: "white" }}
              />
            </a>

            <a href="https://www.facebook.com/Renovemos-Colombia-148371330712136/">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: "1.5rem", color: "white" }}
              />
            </a>

            <a href="">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "1.5rem", color: "white" }}
              />
            </a>

            <a href="">
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ fontSize: "1.5rem", color: "white" }}
              />
            </a>
          </div>
        </div>
        <footer>
          <p>Renovemos Colombia</p>
          <p class="copyrigth">&copy;Todos los derechos reservados</p>
        </footer>
      </div>
    </div>
  );
};

export default DireccionNacional;
