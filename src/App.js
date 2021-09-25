import './App.css';
import { Grid, List, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import ExperienceListItem from './components/ExperienceListItem';
import Wish from './images/Wish.png';
import Lifion from './images/Lifion.png';
import ThomsonReuters from './images/Thomson Reuters.png';
import D2L from './images/D2L.png';
import Huawei from './images/Huawei.jpeg';
import Wize from './images/Wize.jpeg';
import resume from './resume.pdf';

function App() {
  return (
    <div className="App">
      <Grid container alignContent="stretch" className="main-container">
        <Grid item container xs={12} md={6} className="Basic-Sec sec">
          <Grid item xs={12}>
            <h1 className="name">Anish Khanna</h1>
            <p className="occupation">Full Stack Developer</p>
            <IconButton onClick={() => window.open('mailto:a26khann@uwaterloo.ca', '_blank')}>
              <EmailIcon fontSize="large" color="secondary" />
            </IconButton>
            <IconButton onClick={() => window.open('https://github.com/anish-khanna', '_blank')}>
              <GitHubIcon fontSize="large" color="secondary" />
            </IconButton>
            <IconButton onClick={() => window.open('https://www.linkedin.com/in/anish-khanna99/', '_blank')}>
              <LinkedInIcon fontSize="large" color="secondary" />
            </IconButton>
            <IconButton onClick={() => window.open('tel:6472700979', '_blank')}>
              <PhoneIcon fontSize="large" color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={6} className="Info-Sec sec">
          <Grid item xs={12}>
            <h2 className="header">Background Information</h2>
            <p>I'm a 4th year Computer Engineering student at the University of Waterloo looking for Fall 2021 internships!</p>
          </Grid>
          <Grid item xs={12}>
            <h2 className="header">
              Experience
            </h2>
            <List disablePadding>
              <ExperienceListItem image={Wish} company="Wish" position="Software Developer Intern" dateString="Sept - Dec 2021" link="https://www.wish.com/companyinfo?hide_login_modal=true" />
              <ExperienceListItem image={Lifion} company="Lifion by ADP" position="Software Developer Intern" dateString="Jan - Apr 2021" link="https://lifion.com/" />
              <ExperienceListItem image={ThomsonReuters} company="Thomson Reuters" position="Software Developer Intern" dateString="May - Aug 2020" link="https://www.thomsonreuters.com/en.html" />
              <ExperienceListItem image={D2L} company="Desire 2 Learn" position="Software Developer Intern" dateString="Sept - Dec 2019" link="https://www.d2l.com/" />
              <ExperienceListItem image={Huawei} company="Huawei Technologies" position="Software Research Engineer Intern" dateString="Jan - Apr 2019" link="https://www.huawei.com/ca/" />
              <ExperienceListItem image={Wize} company="Wize.ai" position="Software Developer Intern" dateString="May - Aug 2018" link="https://www.sterilwize.com/" />
            </List>
            <p className="resume-line">
              If you'd like some more details on my experiences, they are here on my <a href={resume} target="_blank" rel="noreferrer" className="resume-link">resume</a> or feel free to contact me.
            </p>
          </Grid>
          <Grid item xs={12}>
            <h2 className="header">Open Source Contibutions</h2>
            <p>
              I've recently began contributing to some open source projects including
              &nbsp;<a href="https://github.com/elastic/kibana" target="_blank" rel="noreferrer">Kibana</a> and <a href="https://github.com/mui-org/material-ui" target="_blank" rel="noreferrer">Material-UI</a>.
            </p>
            <p>
              If you have an open source project that needs help, I'd be more than willing to help out!
            </p>
          </Grid>
          <Grid item xs={12}>
            <h2 className="header">Projects</h2>
            <div>
              <h5 className="project-name">Stock Forecaster</h5>
              <p className="project-desc">A deep learning neural network trained over the past 20 years of stock data to predict the growth of any stock over the next year.</p>
            </div>
            <div>
              <h5 className="project-name">NBA Player Comparator</h5>
              <p className="project-desc">
                A web application that compares any two basketball players from the past 50 years over any single season that they played. 
              </p>
            </div>
            <div>
              <h5 className="project-name">Custom Distance Sensor</h5>
              <p className="project-desc">
                A distance sensor with custom PCB design that scans for objects in a close proximity and informs the user of danger using various coloured lights.
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
