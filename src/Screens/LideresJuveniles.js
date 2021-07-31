import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ejecutivo1 from "../Images/HernanJr.jpeg";
import ejecutivo2 from "../Images/Joven1.jpeg";
import ejecutivo3 from "../Images/Joven3.jpeg";
import ejecutivo4 from "../Images/Joven2.jpeg";
import lideres from "../Images/GrupoJovenes.jpeg";
import "./LideresJuveniles.css";
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
    backgroundColor: "White",
    padding: 20,
    marginTop: 20,
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
    marginTop: 50,
  },
  media: {
    height: 370,
  },
});

const LideresJuveniles = () => {
  const classes = useStyles1();
  const classes1 = useStyles2();

  return (
    <div className="efecto">
      <div className="titulo-1">
        <h1 className="animate__animated animate__heartBeat">
          Lideres Juveniles
        </h1>
        <p>
          Mi sueño es generar cambios económicos y sostenibles que nos incluyan
          y fortalezcan a todos los jóvenes. Tenemos que consolidar procesos de
          desarrollo local y regional que contribuyan a la construcción de la
          paz. Sueño con una sociedad donde los jóvenes entiendan que no somos
          el futuro sino el presente.
        </p>
      </div>

      <div className={classes.root} className="efecto">
        <div className="lideres">
          <img src={lideres} alt="lideres"></img>
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
                    Lider Juvenil Comuna 11
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Hernan Alfredo Castellanos Barrera<br></br> Bachiller
                    Industrial INEM<br></br> Mi sueño es generar cambios
                    económicos y sostenibles que nos incluyan.
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
                    Lider Juvenil Comuna 7
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Angelica Maria Lozano Perez <br></br> Bachiller Comercial La
                    Merced<br></br> Sueño con una sociedad donde los jóvenes
                    entiendan que no somos el futuro sino el presente.
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
                    Lide Juvenil Comuna 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Juliet Andrea Barrera Diaz <br></br>Bachiller Comercial INEM
                    <br></br>Si la población juvenil no entiende que somos
                    presente y futuro, no podremos incidir para tener el
                    territorio que soñamos
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
                  image={ejecutivo4}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lider Juvenil Comuna 5
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Juan Mario de la espriella <br></br>Bachiller Comercial INEM
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
          <p>Contactanos: Whatsapp +57 300 123 4567</p>
          <p>Siguenos en nuestras redes sociales...</p>
          <div className="top-redes">
            <a href="https://www.youtube.com/channel/UC7gilKuSRhW1XyGF-D6LGVg">
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ fontSize: "1.5rem", color: "white" }}
              />
            </a>

            <a href="https://www.facebook.com/jduc19/">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: "1.5rem", color: "white" }}
              />
            </a>

            <a href="https://www.instagram.com/jduc19/?hl=es-la">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "1.5rem", color: "white" }}
              />
            </a>

            <a href="https://www.instagram.com/jduc19/?hl=es-la">
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

export default LideresJuveniles;
