// dependancy/file imports
import React from 'react'
import FooterStyles from './FooterStyles'
import { IconButton} from '@material-ui/core'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import Resume from "./resume.pdf";

const Footer = () => {
	// css import
	const classes = FooterStyles();

	return (
		<div className={classes.footer}>
			<div className={classes.textContainer}>
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
			</div>
		</div>
	)
}

export default Footer
