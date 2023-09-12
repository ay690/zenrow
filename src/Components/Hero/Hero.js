import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton, HeroImageLogo, HeroImageWrapper } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assests/coding.mp4" autoPlay muted />
			<Container>
				<MainHeading style={{color: 'wheat'}} >The Web Scraping API </MainHeading>
				<HeroText>
        ZenRows handles all anti-bot bypasses, to make everything easier for you, from rotating proxies and headless browsers to CAPTCHAs.
				</HeroText>
				<ButtonWrapper>
					{/* <Link to="signup">
						<Button>Get Started</Button>
					</Link> */}
					<HeroButton>Try ZenRows for Free</HeroButton>
				</ButtonWrapper>
        <HeroImageWrapper>
          <HeroImageLogo src='./assests/capterra.svg' alt='Capterra' />
        </HeroImageWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
