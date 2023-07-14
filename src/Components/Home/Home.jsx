// dependancies
import React from 'react'
import { Typography, Grid, IconButton, Button, useMediaQuery, Box, Divider} from '@material-ui/core'
import { Link } from 'react-scroll'
import Typewriter from "typewriter-effect"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import mc from "./mc.png";
import Resume from "./resume.pdf";

// file imports
import HomeStyles from './HomeStyles'

const Home = () => {
	// css import
	const classes = HomeStyles();
	const desktop = useMediaQuery('(min-width: 960px)');
	const mobile = useMediaQuery('(min-width: 380px)');

	return (
		<div id="home" className={classes.size} >
			<Grid container xs={12} 
							spacing={0}
							direction="column"
							alignItems="center"
							justifyContent="center"
							sx={{ minHeight: '100vh' }}>

					<div className={classes.title}>
						<div className={classes.titleName}>
							<div style={{ paddingBottom: "2%" }} />
								{/* <Typography className={classes.titleText} variant="h3"><b>Ray Fang</b></Typography> */}
								{/* <br /> */}
							<Typography className={classes.titleText} variant="h1">Ray Fang </Typography>
						</div>
						
						<div className={classes.titleIcons}>
							<a rel="noreferrer" href="https://github.com/fangr16" target="_blank">
								<IconButton className={classes.iconButtonBorder} aria-label="github">
									<FaGithub className={classes.iconButton} />
								</IconButton>
							</a>
							<a rel="noreferrer" href="https://www.linkedin.com/in/rui-fang-38b861245/" target="_blank">
								<IconButton className={classes.iconButtonBorder} aria-label="linkedin">
									<FaLinkedin className={classes.iconButton} />
								</IconButton>
							</a>
							<a rel="noreferrer" href="mailto:ray_fang@foxmail.com" target="_blank">
								<IconButton className={classes.iconButtonBorder} aria-label="email">
									<FaEnvelope className={classes.iconButton} />
								</IconButton>
							</a>
							<a rel="noreferrer" href={Resume} target="_blank">
								<IconButton className={classes.iconButtonBorder} aria-label="document">
									<IoDocumentText className={classes.iconButton} />
								</IconButton>
							</a>
							<br />
							<br />
						</div>
					</div>
				</Grid>
		
		</div>
	)
}

export default Home;