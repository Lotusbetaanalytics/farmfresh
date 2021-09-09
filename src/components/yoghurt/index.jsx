import React from 'react'
import styles from './styles.module.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

const Yoghurt = (props) => {
    const classes = useStyles();
    return (
<div className={styles.products}>
  <div className={styles.img}>
      <img src={props.img} alt={props.title} />
  </div>
  <div className={styles.text}>
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
    {props.children}
          </Typography>
        </AccordionDetails>
      </Accordion>
 
     
  </div>
</div>        
    )
}

export default Yoghurt
