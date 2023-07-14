// dependancies
import React from 'react'
import { Grid, Typography, TextField, Button, Divider, useMediaQuery} from '@material-ui/core'
import emailjs from 'emailjs-com'

// icons
import { FaGithub, FaLinkedin, FaPhone, FaCommentDots } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// file imports
import { db } from "../../firebaseConfig";
import ContactStyles from './ContactStyles'

import{ init } from 'emailjs-com';
init(process.env.REACT_APP_USER_ID);


const Contact = () => {
	// classes and queries
	const classes = ContactStyles();
	const md = useMediaQuery('(max-width: 960px)');
	const lg = useMediaQuery('(min-width: 960px)');

	// state declaration
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [errorName, setErrorName] = React.useState(false);
	const [errorEmail, setErrorEmail] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState(false);

	// event handler
	// const submitHander = (e) => {
	// 	e.preventDefault(); // prevents screen refresh
	// 	// uses regex to verify email
	// 	const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 	setErrorName(false);
	// 	setErrorEmail(false);
	// 	setErrorMessage(false);

	// 	// if a field is invalid, ensure that email is not submitted and error is thrown
	// 	if (name === "" || !emailRegex.test(email) || message === "") {
	// 		if (name === "") {
	// 			setErrorName(true);
	// 		}

	// 		if (!emailRegex.test(email)) {
	// 			setErrorEmail(true);
	// 		}

	// 		if (message === "") {
	// 			setErrorMessage(true);
	// 		}
	// 	} else {
	// 		const firebaseObject = { // object to be sent to firebase and email
	// 			name: name,
	// 			email: email,
	// 			message: message
	// 		}

	// 		// send to firebase
	// 		db.collection('contacts').add(firebaseObject)
	// 			.then(() => {
	// 				console.log('submitted to Firebase');
	// 			})
	// 			.catch((err) => {
	// 				console.log(err.message);
	// 			});

	// 		// send to email
	// 		emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID,{
	// 			name: name,
	// 			email: email,
	// 			to_name: "",
	// 			from_name: "",
	// 			message: message,
	// 			})
	// 			.then((response) => {
	// 				alert('Message has been submitted!');
	// 				console.log(response);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});

	// 		setName('');
	// 		setEmail('');
	// 		setMessage('');
	// 		setErrorName(false);
	// 		setErrorEmail(false);
	// 		setErrorMessage(false);
	// 	}
	// }

	return (
		<Grid container className={classes.root} id="contact">
			{/* Title */}
			<Grid className={classes.title} item xs={12}>
				<br />
				<Typography variant="h2">&#8212;&nbsp;&nbsp; Contact &nbsp;&nbsp;&#8212;</Typography>
			</Grid>

			{/* Contact Text */}
			{lg && <>
				<Grid item xs={1}></Grid>
			<Grid item xs={10} md={5}>
				<br /><br />
				{/* <Typography variant="h5"><b>Get in Touch!</b></Typography> */}
				{/* <Divider></Divider> */}
				<br />
				<MdEmail />&nbsp;
				<Typography display="inline"><b> Email:</b></Typography>
				<a rel="noreferrer" target="_blank" className={classes.contact} href="mailto:ruifang3@illinois.edu">
					<Typography display="inline"> ruifang3@illinois.edu (school);</Typography>
				</a>
				<a rel="noreferrer" target="_blank" className={classes.contact} href="mailto:ray_fang@foxmail.com">
					<Typography display="inline">  ray_fang@foxmail.com (personal)</Typography>
				</a>
				<div /><br />
				<FaPhone />&nbsp;
				<Typography display="inline"><b> Phone:</b></Typography>
				<a rel="noreferrer" target="_blank" className={classes.contact}>
					<Typography className={classes.contact}  display="inline"> +1 812-262-4386</Typography>
				</a>
				<div /><br />
				<FaGithub />&nbsp;
				<Typography display="inline"><b> Github:</b></Typography>
				<a rel="noreferrer" target="_blank" className={classes.contact} href="https://github.com/fangr16">
					<Typography  display="inline"> github.com/fangr16</Typography>
				</a>
				<div /><br />
				<FaLinkedin />&nbsp;
				<Typography display="inline"><b> LinkedIn:</b></Typography>
				<a rel="noreferrer" target="_blank" className={classes.contact} href="linkedin.com/in/rui-fang-38b861245">
					<Typography  display="inline"> linkedin.com/in/rui-fang-38b861245/</Typography>
				</a>
				<div /><br />
				<FaCommentDots />&nbsp;
				<Typography display="inline"><b> WeChat:</b></Typography>
				<a rel="noreferrer" target="_blank" className={classes.contact} href="fangrui200614">
					<Typography  display="inline"> fangrui200614</Typography>
				</a>
				<br /><br /><br />
			</Grid>
			<Grid item xs={1}></Grid>
			</>}

			{/* Contact Form */}
			{/* {md && <Grid item xs={1}></Grid>}
			<Grid item xs={10} md={4}>
				<div className={classes.formContainer}>
					<form onSubmit={submitHander} className={classes.form}>
						<TextField
							className={classes.input}
							value={name}
							onChange={(e) => setName(e.target.value)}
							label="Name"
							variant="outlined"
							error={errorName}
							helperText={errorName ? "Please enter a name." : ""}
						/>
						<br /><br />
						<TextField
							className={classes.input}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							label="Email"
							variant="outlined"
							error={errorEmail}
							helperText={errorEmail ? "Please enter a correct email." : ""}
						/>
						<br /><br />
						<TextField
							className={classes.input}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							label="Message"
							multiline
							rows={10}
							variant="outlined"
							error={errorMessage}
							helperText={errorMessage ? "Please enter a message." : ""}
						/>
						<br /><br />
						<div className={classes.center}>
							<Button type="submit" variant="contained" size="large" className={classes.button}>
								Submit
      						</Button>
						</div>
					</form>
				</div>
			</Grid> */}
			<Grid item xs={1}></Grid>
		</Grid>
	)
}

export default Contact;
