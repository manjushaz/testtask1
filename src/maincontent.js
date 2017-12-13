import React from 'react';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ActionCached from 'material-ui/svg-icons/action/cached';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import CommunicationChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import CommunicationMailOutline from 'material-ui/svg-icons/communication/mail-outline';

const iconMessage = <CommunicationMailOutline />;
const iconFavorite = <ActionFavoriteBorder />;
const iconComment = <CommunicationChatBubbleOutline />;
const iconLike = <ActionCached />

const iconArrow = <HardwareKeyboardArrowDown />

const imageDisplayName = require('./images/image1.jpg');
const imageName = require('./images/yellowflower.jpg');

const style = {
  height: 400,
  width: '100%',
  margin: 0,
  textAlign: 'center',
  display: 'inline-block',

};

const displayImageStyle = {
  height: 250,
  width: '400px',
  marginLeft: 100,
  textAlign: 'center',
  display: 'inline-block',
  backgroundImage: {imageDisplayName}
};

const imgStyle = {
  float: 'left',
  margin: 5,
  textDecoration: 'none',
  borderRadius: '50%'
};

const aStyle = {
  textDecoration: 'none',
  margin: 20
};

const span1Style = {
  textDecoration: 'none',
  color: 'black',
  marginRight: 5,
  textAlign: 'left'
};

const span2Style = {
  textDecoration: 'none',
  color: '#657786',
  marginRight: 10,
  textAlign: 'left'
};

const div1Style = {
  margin: 0,
  textAlign: 'left'
};

const div2Style = {
  display: 'inline-block',
  marginLeft: 200
};

const div3Style = {
  marginLeft: 80,
  marginTop:  0,
  marginRight: 10
};

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value: 3,
      selectedIndex: 0
    };
  }
  handleChange = (event, index, value) => this.setState({value});
  select = (index) => this.setState({selectedIndex: index});
  render() {
    return(
      <Paper style={style} rounded={false} zDepth={1}>
        <div style={div1Style}>
         <a href="#3" style={aStyle}>
           <img style={imgStyle}
             src={imageName} width='50px' height='50px' alt='avatar'/>
           <span style={span1Style}><strong>Jayaram J</strong></span>
           <span style={span2Style}>@jjram</span>
           <span style={span2Style}>.40m</span>
         </a>
         <div style={div2Style}>
           <IconMenu
             iconButtonElement={<IconButton>{iconArrow}</IconButton>}
             anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
             targetOrigin={{horizontal: 'left', vertical: 'top'}}
           >
             <MenuItem primaryText="Copy link to Tweet" />
             <MenuItem primaryText="Embed Tweet" />
             <MenuItem primaryText="Mute @ManjuZM" />
             <MenuItem primaryText="Block @ManjuZM" />
             <MenuItem primaryText="Report Tweet" />
             <MenuItem primaryText="I don't like this Tweet" />
             <Divider />
             <MenuItem primaryText="Add to new Moment" />
           </IconMenu>
         </div>
         <div style={div3Style}>
            <p>Our family believes in transparency. We have been declaring our assets from the last 6 years.
              And, this year too, we have done it. Details are in the images.</p>
         </div>
         <Paper style={displayImageStyle}  zDepth={1}>
           <img src={imageDisplayName} style={{width: '100%', height: '100%'}} alt='aa'/>
         </Paper>
         <Paper zDepth={1}>
            <BottomNavigation style={{position:'static'}} selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
               label="20"
               icon={iconComment}
               onClick={() => this.select(0)}
               style={{position:'static'}}
            />
            <BottomNavigationItem
              label="12"
              icon={iconLike}
              onClick={() => this.select(1)}
              style={{position:'static'}}
            />
            <BottomNavigationItem
              label="24"
              icon={iconFavorite}
              onClick={() => this.select(2)}
              style={{position:'static'}}
            />
            <BottomNavigationItem
              label=""
              icon={iconMessage}
              onClick={() => this.select(3)}
              style={{position:'static'}}
            />
          </BottomNavigation>
        </Paper>
       </div>
      </Paper>
    )
  }
};
