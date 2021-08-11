import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ejecutivo1 from "../Images/ejecutivo (1).jpg";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import UncontrolledLottie2 from "../Components/UncontrolledLottie2";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Candidatos.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 340,
    minWidth: 165,
    marginTop: 10,
  },
  media: {
    height: 0,
    paddingTop: "115%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

//Federico Alvarez
const useStyles3 = makeStyles((theme) => ({
  root3: {
    maxWidth: 340,
    minWidth: 165,
    marginTop: 10,
  },
  media: {
    height: 0,
    paddingTop: "115%", // 16:9
  },
  expand3: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen3: {
    transform: "rotate(180deg)",
  },
}));

//Camilo Fernandez
const useStyles2 = makeStyles((theme) => ({
  root2: {
    maxWidth: 340,
    minWidth: 165,
    marginTop: 10,
  },
  media: {
    height: 0,
    paddingTop: "115%", // 16:9
  },
  expand2: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen2: {
    transform: "rotate(180deg)",
  },
}));

const useStyles1 = makeStyles((theme) => ({
  root1: {
    flexGrow: 1,
    padding: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Candidatos = () => {
  //Gustavo Guio
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes1 = useStyles1();

  //Camilo Fernandez
  const classes2 = useStyles2();
  const [expanded2, setExpanded2] = React.useState(false);
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  //Federico Alvarez
  const classes3 = useStyles3();
  const [expanded3, setExpanded3] = React.useState(false);
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  return (
    <div className="efecto">
      <div className="contenedor-prin">
        <div className={classes1.root1}>
          <div className="titulo-1 ">
            <h1>ESTRUCTURA ORGANIZACIONAL</h1>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={2}>
              <Card className={classes.root}>
                <CardHeader
                  title="Camara de Representantes"
                  subheader="Gustavo Guio"
                />
                <CardMedia className={classes.media} image={ejecutivo1} />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Abogado y Especialista en Derecho Administrativo
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Biografia:</Typography>

                    <Typography>
                      Coordinador del Primer Congreso Regional de Administración
                      Pública: Nuevas Tendencias de Gestión Pública, en alianza
                      con ESAP CETAP BUCARAMANGA, Exmiembro de la Junta
                      Directiva del Fondo de Empleados de la Defensoría del
                      Pueblo, Secretario General del Sindicato de los
                      Trabajadores de la Procuraduría General de la Nación –
                      Subdirectiva Seccional Santander.
                      <br />
                      Reunida la experiencia como servidor público, y combinada
                      con la preparación académica en administración pública,
                      abogado especializado en derecho administrativo,
                      convencido de mi vocación al servicio público, de la mano
                      de Dios quiero aportar de una manera mas significativa
                      mediante un proyecto encaminado a recuperar el verdadero
                      sentido de la política, con ideas y proyectos que se
                      traduzcan en la satisfacción de las expectativas de una
                      comunidad agobiada con la negligencia, el olvido, la co
                      xdrrupción y los intereses particulares de quienes están
                      al frente de ellas.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            <Grid item xs={6} sm={2}>
              <Card className={classes2.root2}>
                <CardHeader
                  title="Camara de Representantes"
                  subheader="Camilo Fernandez"
                />
                <CardMedia className={classes2.media} image={ejecutivo1} />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Abogado y Especialista en Derecho Administrativo
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    className={clsx(classes2.expand2, {
                      [classes2.expandOpen2]: expanded2,
                    })}
                    onClick={handleExpandClick2}
                    aria-expanded={expanded2}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Biografia:</Typography>

                    <Typography>
                      Coordinador del Primer Congreso Regional de Administración
                      Pública: Nuevas Tendencias de Gestión Pública, en alianza
                      con ESAP CETAP BUCARAMANGA, Exmiembro de la Junta
                      Directiva del Fondo de Empleados de la Defensoría del
                      Pueblo, Secretario General del Sindicato de los
                      Trabajadores de la Procuraduría General de la Nación –
                      Subdirectiva Seccional Santander.
                      <br />
                      Reunida la experiencia como servidor público, y combinada
                      con la preparación académica en administración pública,
                      abogado especializado en derecho administrativo,
                      convencido de mi vocación al servicio público, de la mano
                      de Dios quiero aportar de una manera mas significativa
                      mediante un proyecto encaminado a recuperar el verdadero
                      sentido de la política, con ideas y proyectos que se
                      traduzcan en la satisfacción de las expectativas de una
                      comunidad agobiada con la negligencia, el olvido, la co
                      xdrrupción y los intereses particulares de quienes están
                      al frente de ellas.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            <Grid item xs={6} sm={2}>
              <Card className={classes3.root3}>
                <CardHeader
                  title="Camara de Representantes"
                  subheader="Federico Alvarez"
                />
                <CardMedia className={classes3.media} image={ejecutivo1} />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Abogado y Especialista en Derecho Administrativo
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    className={clsx(classes3.expand3, {
                      [classes.expandOpen3]: expanded3,
                    })}
                    onClick={handleExpandClick3}
                    aria-expanded={expanded3}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded3} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Biografia:</Typography>

                    <Typography>
                      Coordinador del Primer Congreso Regional de Administración
                      Pública: Nuevas Tendencias de Gestión Pública, en alianza
                      con ESAP CETAP BUCARAMANGA, Exmiembro de la Junta
                      Directiva del Fondo de Empleados de la Defensoría del
                      Pueblo, Secretario General del Sindicato de los
                      Trabajadores de la Procuraduría General de la Nación –
                      Subdirectiva Seccional Santander.
                      <br />
                      Reunida la experiencia como servidor público, y combinada
                      con la preparación académica en administración pública,
                      abogado especializado en derecho administrativo,
                      convencido de mi vocación al servicio público, de la mano
                      de Dios quiero aportar de una manera mas significativa
                      mediante un proyecto encaminado a recuperar el verdadero
                      sentido de la política, con ideas y proyectos que se
                      traduzcan en la satisfacción de las expectativas de una
                      comunidad agobiada con la negligencia, el olvido, la co
                      xdrrupción y los intereses particulares de quienes están
                      al frente de ellas.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/*  <Grid item xs={6} sm={2}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Camara de Representantes"
                subheader="Gustavo Guio"
              />
              <CardMedia className={classes.media} image={ejecutivo1} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Abogado y Especialista en Derecho Administrativo
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Biografia:</Typography>
                  <Typography paragraph>
                    Nacido en Bucaramanga, el 14 de mayo de 1982, hijo de Néstor
                    Guío Sánchez y Amparo Barrera Diaz, casado con Nubia Stella
                    León Gómez, padre de dos hijos, Camilo Andrés y Juan David.
                    Estudié la primaria en la concentración escolar San Pablo
                    ubicada en el Barrio Bucaramanga, graduado de secundaria
                    como Bachiller Técnico Comercial y por convenio con el SENA
                    con certificado de Aptitud Ocupacional como procesador de
                    datos contables; lo anterior, me permitió adelantar
                    practicas empresariales en la Alcaldía Municipal de
                    Floridablanca, iniciando desde allí en la secretaría de
                    educación municipal los primeros pasos para estructurar la
                    vocación por el servicio público.
                  </Typography>
                  <Typography>
                    Coordinador del Primer Congreso Regional de Administración
                    Pública: Nuevas Tendencias de Gestión Pública, en alianza
                    con ESAP CETAP BUCARAMANGA, Exmiembro de la Junta Directiva
                    del Fondo de Empleados de la Defensoría del Pueblo,
                    Secretario General del Sindicato de los Trabajadores de la
                    Procuraduría General de la Nación – Subdirectiva Seccional
                    Santander.
                    <br />
                    Reunida la experiencia como servidor público, y combinada
                    con la preparación académica en administración pública,
                    abogado especializado en derecho administrativo, convencido
                    de mi vocación al servicio público, de la mano de Dios
                    quiero aportar de una manera mas significativa mediante un
                    proyecto encaminado a recuperar el verdadero sentido de la
                    política, con ideas y proyectos que se traduzcan en la
                    satisfacción de las expectativas de una comunidad agobiada
                    con la negligencia, el olvido, la co xdrrupción y los
                    intereses particulares de quienes están al frente de ellas.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Camara de Representantes"
                subheader="Gustavo Guio"
              />
              <CardMedia className={classes.media} image={ejecutivo1} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Abogado y Especialista en Derecho Administrativo
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Biografia:</Typography>
                  <Typography paragraph>
                    Nacido en Bucaramanga, el 14 de mayo de 1982, hijo de Néstor
                    Guío Sánchez y Amparo Barrera Diaz, casado con Nubia Stella
                    León Gómez, padre de dos hijos, Camilo Andrés y Juan David.
                    Estudié la primaria en la concentración escolar San Pablo
                    ubicada en el Barrio Bucaramanga, graduado de secundaria
                    como Bachiller Técnico Comercial y por convenio con el SENA
                    con certificado de Aptitud Ocupacional como procesador de
                    datos contables; lo anterior, me permitió adelantar
                    practicas empresariales en la Alcaldía Municipal de
                    Floridablanca, iniciando desde allí en la secretaría de
                    educación municipal los primeros pasos para estructurar la
                    vocación por el servicio público.
                  </Typography>
                  <Typography>
                    Coordinador del Primer Congreso Regional de Administración
                    Pública: Nuevas Tendencias de Gestión Pública, en alianza
                    con ESAP CETAP BUCARAMANGA, Exmiembro de la Junta Directiva
                    del Fondo de Empleados de la Defensoría del Pueblo,
                    Secretario General del Sindicato de los Trabajadores de la
                    Procuraduría General de la Nación – Subdirectiva Seccional
                    Santander.
                    <br />
                    Reunida la experiencia como servidor público, y combinada
                    con la preparación académica en administración pública,
                    abogado especializado en derecho administrativo, convencido
                    de mi vocación al servicio público, de la mano de Dios
                    quiero aportar de una manera mas significativa mediante un
                    proyecto encaminado a recuperar el verdadero sentido de la
                    política, con ideas y proyectos que se traduzcan en la
                    satisfacción de las expectativas de una comunidad agobiada
                    con la negligencia, el olvido, la co xdrrupción y los
                    intereses particulares de quienes están al frente de ellas.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} sm={2}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Camara de Representantes"
                subheader="Gustavo Guio"
              />
              <CardMedia className={classes.media} image={ejecutivo1} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Abogado y Especialista en Derecho Administrativo
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Biografia:</Typography>
                  <Typography paragraph>
                    Nacido en Bucaramanga, el 14 de mayo de 1982, hijo de Néstor
                    Guío Sánchez y Amparo Barrera Diaz, casado con Nubia Stella
                    León Gómez, padre de dos hijos, Camilo Andrés y Juan David.
                    Estudié la primaria en la concentración escolar San Pablo
                    ubicada en el Barrio Bucaramanga, graduado de secundaria
                    como Bachiller Técnico Comercial y por convenio con el SENA
                    con certificado de Aptitud Ocupacional como procesador de
                    datos contables; lo anterior, me permitió adelantar
                    practicas empresariales en la Alcaldía Municipal de
                    Floridablanca, iniciando desde allí en la secretaría de
                    educación municipal los primeros pasos para estructurar la
                    vocación por el servicio público.
                  </Typography>
                  <Typography>
                    Coordinador del Primer Congreso Regional de Administración
                    Pública: Nuevas Tendencias de Gestión Pública, en alianza
                    con ESAP CETAP BUCARAMANGA, Exmiembro de la Junta Directiva
                    del Fondo de Empleados de la Defensoría del Pueblo,
                    Secretario General del Sindicato de los Trabajadores de la
                    Procuraduría General de la Nación – Subdirectiva Seccional
                    Santander.
                    <br />
                    Reunida la experiencia como servidor público, y combinada
                    con la preparación académica en administración pública,
                    abogado especializado en derecho administrativo, convencido
                    de mi vocación al servicio público, de la mano de Dios
                    quiero aportar de una manera mas significativa mediante un
                    proyecto encaminado a recuperar el verdadero sentido de la
                    política, con ideas y proyectos que se traduzcan en la
                    satisfacción de las expectativas de una comunidad agobiada
                    con la negligencia, el olvido, la co xdrrupción y los
                    intereses particulares de quienes están al frente de ellas.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Camara de Representantes"
                subheader="Gustavo Guio"
              />
              <CardMedia className={classes.media} image={ejecutivo1} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Abogado y Especialista en Derecho Administrativo
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Biografia:</Typography>
                  <Typography paragraph>
                    Nacido en Bucaramanga, el 14 de mayo de 1982, hijo de Néstor
                    Guío Sánchez y Amparo Barrera Diaz, casado con Nubia Stella
                    León Gómez, padre de dos hijos, Camilo Andrés y Juan David.
                    Estudié la primaria en la concentración escolar San Pablo
                    ubicada en el Barrio Bucaramanga, graduado de secundaria
                    como Bachiller Técnico Comercial y por convenio con el SENA
                    con certificado de Aptitud Ocupacional como procesador de
                    datos contables; lo anterior, me permitió adelantar
                    practicas empresariales en la Alcaldía Municipal de
                    Floridablanca, iniciando desde allí en la secretaría de
                    educación municipal los primeros pasos para estructurar la
                    vocación por el servicio público.
                  </Typography>
                  <Typography>
                    Coordinador del Primer Congreso Regional de Administración
                    Pública: Nuevas Tendencias de Gestión Pública, en alianza
                    con ESAP CETAP BUCARAMANGA, Exmiembro de la Junta Directiva
                    del Fondo de Empleados de la Defensoría del Pueblo,
                    Secretario General del Sindicato de los Trabajadores de la
                    Procuraduría General de la Nación – Subdirectiva Seccional
                    Santander.
                    <br />
                    Reunida la experiencia como servidor público, y combinada
                    con la preparación académica en administración pública,
                    abogado especializado en derecho administrativo, convencido
                    de mi vocación al servicio público, de la mano de Dios
                    quiero aportar de una manera mas significativa mediante un
                    proyecto encaminado a recuperar el verdadero sentido de la
                    política, con ideas y proyectos que se traduzcan en la
                    satisfacción de las expectativas de una comunidad agobiada
                    con la negligencia, el olvido, la co xdrrupción y los
                    intereses particulares de quienes están al frente de ellas.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid> */}
          </Grid>
        </div>
      </div>
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
  );
};

export default Candidatos;
