import { Main } from '../sitecomponents/App.style';
import Footer from '../sitecomponents/Footer/index';
import { ThemeProvider } from 'styled-components';
import {
  darkTheme,
  GlobalStyle,
  lightTheme,
} from '../sitecomponents/index.style.js';
import { useDarkMode } from '../sitecomponents/useDarkMode';
import Navigation from '../sitecomponents/Navigation/index';
import Faq from '../sitecomponents/Faq/index';
import React, { useState } from 'react';
import BadgeGrid from '../sitecomponents/BadgeGrid/index';
import recognitionLogo from '../assets/images/recognition-program.png';
import recognitionBanner from '../assets/images/recognition-banner.png';
import '../fonts.css';
import GithubLogo from './githubLogo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import khulnasoftLogo from '../assets/images/khulnasoft/khulnasoft-badges.png';
import khulnasoftLogoLight from '../assets/images/khulnasoft/khulnasoft-badges-white.png';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [showSignUpButton, setShowSignUpButton] = useState(true);
  const fillColor = theme === 'light' ? '#24292F' : '#ffffff';
  const queryClient = new QueryClient();

  const Logo = theme === 'light' ? khulnasoftLogo : khulnasoftLogoLight;
  // const handleSignUpFormSubmit = () => {
  //   setShowSignUpButton(false);
  // };
  return (
    <>
      <title>KhulnaSoft Recognition Program</title>
      <meta
        name="description"
        content="Showcasing Your Achievements as a User and a Contributor"
      />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <Navigation
            theme={theme}
            toggleTheme={toggleTheme}
            showSignUpButton={showSignUpButton}
            logo={Logo}
          />
          <Main>
            <section className="hero">
              <img
                className="program-logo"
                src={recognitionLogo}
                alt="Recognition Program Logo"
              />
              <h3 className="try-now-txt">
                Showcasing Your Achievements as a User and a Contributor
              </h3>
              <h1>KhulnaSoft Recognition Program</h1>
              <p className="desc-text">
                KhulnaSoft badges are one of the many ways that we recognize the
                efforts of our contributors and uplift our users. KhulnaSoft badges
                represent milestones that you achieve both in using and in
                contributing to KhulnaSoft-supported open source projects. As a
                contributor, this is how you demonstrate your ownership,
                dedication, skills and commitment. As a user, this is how
                you demonstrate your prowess, milestones, and meaningful engagement.
              </p>
              <div className="banner-main">
                <img src={recognitionBanner} alt="Recognition Program Banner" />
              </div>
              <p>
                See the{' '}
                <a href="https://khulnasoft.com/community/handbook/recognition">
                  Recognition
                </a>{' '}
                section of the{' '}
                <a href="https://khulnasoft.com/community/handbook/recognition">
                  KhulnaSoft Community Handbook
                </a>{' '}
                for details of when and how each badge is awarded.
              </p>
              <section className="faq">
                {/* <h1>Frequently Asked Questions</h1> */}
                <Faq
                  category={['KhulnaSoft Badges']}
                  display-category-title={'false'}
                />
              </section>
              <section className="badges">
                <BadgeGrid />
              </section>
              <div className="banner-logos">
                <h3>
                  Wear your badge proudly. Embed your KhulnaSoft badges in your
                  GitHub profile
                </h3>
                <div className="display-badge-steps-parent">
                  <div className="display-badge">
                    <h4>Follow these steps to display your badge:</h4>
                    <div className="display-badge-steps">
                      <ul>
                        <li>
                          Visit your{' '}
                          <a href="https://meshplay.khulnasoft.com">KhulnaSoft Cloud</a>{' '}
                          Profile to see the badges
                        </li>
                        <li>Click on the badge, which you wanted to display</li>
                        <li>
                          Copy the markdown code by clicking the Embed Code icon
                        </li>
                        <li>Paste the code in your GitHub profile README.</li>
                      </ul>
                    </div>
                  </div>
                  <GithubLogo
                    fillColor={fillColor}
                    width="12rem"
                    height="11rem"
                  />
                </div>
              </div>
              {/* <ReactPlayer  
              url="https://youtu.be/Do7htKrRzDA"
              playing
              controls
              light={meshplayPlayground}
              width="90%"
              style={{ margin: "auto" }}
              className="embedVideo"
            /> */}

              {/* <p className="caption">Launch and learn with Meshplay</p>
            <p className="byline">The cloud native playground contains a set of learning paths that incorporate an application networking centric curriculum featuring training on 200+ integrations.</p> */}
            </section>
            {/* <section className="form" id="signup-form">
            <SignupForm onSubmit={handleSignUpFormSubmit}  />
          </section> */}

            <section className="join-community">
              <div>
                <h1>Join the community!</h1>
                <p>Engage in the KhulnaSoft community by joining us on Slack</p>
                <div className="btn-container">
                  <div>
                    <a href="https://slack.khulnasoft.com/">
                      Join Our Open Source Community
                    </a>
                  </div>
                  <div>
                    <a
                      href="/discussion-leaderboard"
                      className="btn-secondary"
                    >
                      Discussion Forum Leaderboard
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </Main>
          <Footer />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
