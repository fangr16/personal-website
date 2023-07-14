import React from 'react';
import { Grid, Typography, Card, CardContent, useMediaQuery } from '@material-ui/core';
import { GoGear } from 'react-icons/go';
import { FaDatabase } from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import SkillBar from 'react-skillbars';
import { useStyles, skills, colors } from './skillsStyles.js'

const Skillsgrid = () => {
    const classes = useStyles();

    const mobile = useMediaQuery('(max-width: 960px)');
    const desktop = useMediaQuery('(min-width: 960px)');

    return (
        <div className={classes.background} >
        <Grid id="skills" className="mainGrid" container>
            <Grid className={classes.title} item xs={12}>
                <br />
                <Typography variant="h2">&#8212;&nbsp;&nbsp; Skills &nbsp;&nbsp;&#8212;</Typography>
                {/* <Typography variant="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography> */}
                <br />
                <br />
            </Grid>
            {desktop && <Grid item xs={1}></Grid>}

            <Grid className={classes.cards} container item xs={12} md={10} spacing={1}>
                {mobile && <Grid item xs={3} md={0}></Grid>}
                <Grid item xs={6} md={6} spacing={1}>
                    <Card variant="outlined" className={classes.container}>
                        <CardContent>
                            <GoGear className={classes.icon} />
                            <Typography className={classes.header} gutterBottom>
                                Programming Languages
                        </Typography>
                            <Typography className={classes.body}>
                                C, C++, C#, Java, Kotlin, MIPS, MS SQL, Python
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {mobile && <Grid item xs={3} md={0}></Grid>}
                {mobile && <Grid item xs={3} md={0}></Grid>}
                <Grid item xs={6} md={6} spacing={1}>
                    <Card variant="outlined" className={classes.container}>
                        <CardContent>
                            <FaDatabase className={classes.icon} />
                            <Typography className={classes.header} gutterBottom>
                                Tools
                        </Typography>
                            <Typography className={classes.body}>
                                Git, Jupyter Notebook, Pandas, Scikit-Learn, Unity3D, Unreal 5, Visual Studio Code
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {mobile && <Grid item xs={3} md={0}></Grid>}
                {desktop && <Grid item xs={12}></Grid>}
                {desktop && <Grid item xs={12}></Grid>}
                {mobile && <Grid item xs={3} md={0}></Grid>}
                <Grid item xs={6} md={6} spacing={1}>
                    <Card variant="outlined" className={classes.container2}>
                        <CardContent>
                            <AiOutlineAntDesign className={classes.icon} />
                            <Typography className={classes.header} gutterBottom>
                                Web Technologies
                        </Typography>
                            <Typography className={classes.body} gutterBottom>
                                Docker, Express, Firebase, JavaScript, MongoDB, Nodejs, React, TypeScript
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {mobile && <Grid item xs={3} md={0}></Grid>}
                {mobile && <Grid item xs={3} md={0}></Grid>}
                <Grid item xs={6} md={6} spacing={1}>
                    <Card variant="outlined" className={classes.container2}>
                        <CardContent>
                            <GiSkills className={classes.icon} />
                            <Typography className={classes.header} gutterBottom>
                                Operating Systems
                        </Typography>
                            <Typography className={classes.body} gutterBottom>
                                Linux (Ubuntu), Windows
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {mobile && <Grid item xs={3} md={0}></Grid>}
                
            </Grid>
            {mobile && <Grid item xs={1} md={0}></Grid>}
            

            {/* <Grid item xs={10} md={5}>
                <div style={{ fontFamily: "Poppins" }}>
                    {desktop && <div style={{ paddingLeft: "8%" }}>
                        <SkillBar animationDelay="1000ms" skills={skills} colors={colors} />
                    </div>
                    }
                    {mobile && 
                        <SkillBar animationDelay="1000ms" skills={skills} colors={colors} /> 
                    }
                </div>
            </Grid> */}
            {mobile && <Grid item xs={1} md={0}></Grid>}
            <Grid item xs={12}></Grid>
            <br />
            <br />
            <br />
            <br />
            <br />
        </Grid>
        </div>
    )
}
export default Skillsgrid
