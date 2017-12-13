import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import AvatarImage from './avatarimage';
import MainContent from './maincontent';
import TrendsForYou from './trendsforyou';
import WhoToFollow from './whotofollow';
import DashBoard from './dashboard';
import FooterBox from './footerbox';
import SearchBar from 'material-ui-search-bar'
import ImageCropOriginal from 'material-ui/svg-icons/image/crop-original';

const iconImage = <ImageCropOriginal color='#757575' />
const underline = 'underline';
const none = 'none';

const divStyle = {
  display: 'flex'
}

const div2Style = {
  display: 'flex',
  margin: '10px 5px 5px 10px'
}

const box2Style = {
  height: 1000,
  width: 590,
  margin: '60px 20px 20px 20px',
  textAlign: 'center',
};

const comp2Style = {
  height: 70,
  width: '100%',
  margin: 0,
  backgroundColor: '#E1F5FE',
  textAlign: 'center',
  display: 'inline-block',
};

const fullBtnStyle = {
  textTransform: 'none',
  color: '#2196F3',
  position: 'static',
}

const whoStyle = {
  maxHeight: 1000,
  width: 290,
  margin: '60px 80px 20px 20px',
  textAlign: 'center',
  position: 'static'
};

const dashStyle = {
  height: 250,
  width: 290,
  margin: '60px 20px 20px 80px',
  textAlign: 'center',
};

export default class MainArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {style: none}
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  handleMouseOver() {
    this.setState({style: underline});
  }
  handleMouseOut() {
    const newState = this.state.style === none ? underline : none;
    this.setState({style: newState});
  }
  render() {
    return(
      <div style={divStyle}>
        <div>
          <DashBoard name='Manjusha Z' hashTag='@ManjuZM' style={dashStyle}/>
          <TrendsForYou />
        </div>
        <Paper style={box2Style} rounded={false} zDepth={1}>
          <Paper style={comp2Style} rounded={false}>
            <div style={div2Style}>
              <AvatarImage size={40}/>
                <SearchBar
                  onChange={() => console.log('onChange')}
                  onRequestSearch={() => console.log('onRequestSearch')}
                  style={{
                    margin: '0 auto',
                    width: '100%',
                    maxWidth: 800,
                    borderRadius: 30
                  }}
                  hintText="What's happening?"
                  searchIcon={iconImage}
                />
            </div>
          </Paper>

          <FlatButton label="See new tweets"
               labelStyle={fullBtnStyle}
               fullWidth={true}
                style={{backgroundColor: 'white', position: 'static'}} />

          <MainContent />
          <MainContent />
          <MainContent />
          <MainContent />
        </Paper>
        <div>
           <WhoToFollow style={whoStyle}/>
           <FooterBox />
        </div>

      </div>
    )
  }
}
