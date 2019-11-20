import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import GithubCard from './components/SocialMediaComponents/GithubCard';
import InstagramCard from './components/SocialMediaComponents/InstagramCard';
import YoutubeCard from './components/SocialMediaComponents/YoutubeCard';
import Footer from './components/Footer';
import './App.css';
import telegramIcon from './assets/images/telegramIcon.png';
import spotifyIcon from './assets/images/spotifyIcon.png';
import { SocialIcon } from 'react-social-icons';

// Github API : https://api.github.com/users/bhatvikrant

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      // Github State
      githubUsername: "",
      repos: null,
      githubDp: null,
      githubBio: "",
      githubBlog: "",
      githubCompany: "",
      githubName: "",
      githubFollowers: "",
      githubFollowing: "",
      githubLocation: "",
      githubHireable: Boolean,


      // Insta state
      username: "",
      instaName: "",
      instaBio: "",
      instaFollowers: "",
      instaFollowing: "",
      instaDp: null,
      instaPosts: "",
      isVerified: Boolean,
      loading: false,
      followers: 0,
      following: 0,
      fullName: '',
      error: false,


      // Youtube State
      YTchannel: "",
      YTtotalViews: "",
      YTsubscribers: "",
      YTtotalVideos: ""
    };
  }

  componentDidMount() {
    const user = "tanaypratap";
    axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        // console.log("github resposnse", res);
        const githubUsername = res.data.login;
        const repos = res.data.public_repos;
        const githubDp = res.data.avatar_url;
        const githubBio = res.data.bio;
        const githubBlog = res.data.blog;
        const githubCompany = res.data.company;
        const githubName = res.data.name;
        const githubFollowers = res.data.followers;
        const githubFollowing = res.data.following;
        const githubLocation = res.data.location;
        const githubHireable = res.data.hireable;



        this.setState({ githubUsername });
        this.setState({ repos });
        this.setState({ githubDp });
        this.setState({ githubBio });
        this.setState({ githubBlog });
        this.setState({ githubCompany });
        this.setState({ githubName });
        this.setState({ githubFollowers });
        this.setState({ githubFollowing });
        this.setState({ githubLocation });
        this.setState({ githubHireable });
      })
      .catch(err => {
        // console.log(err);
        alert("Please Enter a valid Github username");
      });

    const instaUser = "tanaypratap";
    axios.get(`https://instagram.com/${instaUser}/?__a=1`)
      .then((resp) => {
        // console.log("Instagram Response", resp);
        const username = resp.data.graphql.user.username;
        const instaName = resp.data.graphql.user.full_name;
        const instaBio = resp.data.graphql.user.biography;
        const instaFollowers = resp.data.graphql.user.edge_followed_by.count;
        const instaFollowing = resp.data.graphql.user.edge_follow.count;
        const instaDp = resp.data.graphql.user.profile_pic_url_hd;
        const instaPosts = resp.data.graphql.user.edge_owner_to_timeline_media.count;
        const isVerified = resp.data.graphql.user.is_verified;


        this.setState({ username });
        this.setState({ instaName });
        this.setState({ instaBio });
        this.setState({ instaFollowers });
        this.setState({ instaFollowing });
        this.setState({ instaDp });
        this.setState({ instaPosts });
        this.setState({ isVerified });
      })
      .catch(err => {
        // console.log(err);
        alert("Please Enter a valid Instagram username");
      });

    const YTchannelID = "UCNFmBuclxQPe57orKiQbyfA";
    axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YTchannelID}&key=AIzaSyDHV4U1dY3efYdKf_3cOH8uSEjwBjZaxpU`)
      .then((respo) => {
        // console.log("Youtube Response", respo);
        const YTchannel = respo.data.items[0].id;
        const YTtotalViews = respo.data.items[0].statistics.viewCount;
        const YTsubscribers = respo.data.items[0].statistics.subscriberCount;
        const YTtotalVideos = respo.data.items[0].statistics.videoCount;

        this.setState({ YTchannel });
        this.setState({ YTtotalViews });
        this.setState({ YTsubscribers });
        this.setState({ YTtotalVideos });
      })
      .catch(err => {
        // console.log(err);
        alert("Please Enter a valid Youtube channel ID");
      });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#74C2E1", padding: "0px", overflowX: "hidden", minHeight: '100%' }}>
        <center>
          <h1 style={{ marginTop: '50px', fontFamily: "Marker Felt, fantasy", color: 'black' }}>Tanay's Online Presence :)</h1>
          <div className="flex-wrapper">
            <div className="container">
              <Row style={{ padding: "0px" }}>
                <Col style={{ padding: "0px", margin: "0px" }} sm={4} md={4} lg={true}>
                  <GithubCard {...this.state} />
                </Col>
                <Col style={{ padding: "0px" }} sm={4} md={4} lg={true}>
                  <InstagramCard {...this.state} />
                </Col>
                <Col style={{ padding: "0px" }} sm={4} md={4} lg={true}>
                  <YoutubeCard {...this.state} />
                </Col>
              </Row>
            </div>

            <div style={{ margin: "10px" }} >
              <Row>
                <Col xs={12} md={6}><span style={{ margin: "10px" }}>
                  <img src={spotifyIcon} height="50px" width="50px" alt="spotifyIcon" style={{ margin: "10px" }} />
                  <a href="https://open.spotify.com/show/3dDVSp6sK7EGfw09jkvIl8?si=dkjghSOLSnawJ3pgkFaHwQ" style={{ color: "white" }}>Listen to teawithtanay - Podcast by Tanay</a>
                </span>
                </Col>
                <Col xs={12} md={6}><span style={{ margin: "10px" }}>
                  <img src={telegramIcon} height="70px" width="70px" alt="telegramIcon" style={{ margin: "10px" }} />
                  <a href="https://t.me/joinchat/JCR_m024H9lVLCJhwHw_xA" style={{ color: "white" }}>Join #TeamTanay on Telegram</a>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <SocialIcon url="https://www.facebook.com/tanay.pratap" bgColor="white" fgColor="#3b5998" target="_blank" rel="noopener noreferrer" style={{ margin: "10px" }}/>
                  <span><a href="https://www.facebook.com/tanay.pratap" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Follow Tanay on Facebook</a></span>
                </Col>
                <Col xs={12} md={6}>
                  <SocialIcon url="https://twitter.com/tanaypratap" bgColor="white" fgColor="#74C2E1" target="_blank" rel="noopener noreferrer" style={{ margin: "10px" }}/>
                  <span><a href="https://twitter.com/tanaypratap" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Follow Tanay on Twitter</a></span>
                </Col>
              </Row>
            </div>
            <div style={{ padding: '20px' }}>
              <a style={{ fontFamily: "Arial", color: "black", fontSize: '20px' }} href="https://social-media-stats-summary.netlify.com/" target="_blank" rel="noopener noreferrer">Want to view your own stats? (click here)</a>
            </div>
            <div style={{ padding: '20px' }}>
              <span style={{ fontFamily: "cursive", color: "white", fontSize: '30px' }}>~Come lets Analyse some Stats~</span>
            </div>

            <Footer style={{ marginBottom: "0px" }} />
          </div>
        </center>
      </div>
    )
  }
}

export default App
