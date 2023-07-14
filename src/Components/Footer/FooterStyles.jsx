//Styling for header content
import { makeStyles } from '@material-ui/styles';

const FooterStyles = makeStyles((theme) => ({
	footer: {
		display: "flex",
		background: "#0644A3",
		height: "8vh",
		color: "#ffffff",
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "Poppins",
	},
	textContainer: {
		display: "inline-block",
		textAlign: "center"
	},
	iconButtonBorder: {
		transition: "0.3s",
		borderRadius: "55%",
		color: "white",
		border: "1px solid white",
		marginRight: "2.5vw",
		'&:hover': {
			backgroundColor: "#FFFFFF",
			color: "#0644A3",
			transition: "0.3s"
        }
	},
	iconButton: {
		width: "3vh",
		height: "auto",
	},
}))

export default FooterStyles;