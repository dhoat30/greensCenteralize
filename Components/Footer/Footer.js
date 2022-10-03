import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Logo from "../UI/Logo/Logo";
import axios from "axios";
import ColumnTitle from "../UI/Titles/ColumnTitle";
import AnchorLinkIcon from "../UI/AnchorLinkIcon/AnchorLinkIcon";
import Copyright from "../UI/Copyright/Copyright";
import MobileFixedButtons from "../UI/MobileFixedButtons/MobileFixedButtons";
import ContactInfoContext from "../../store/contact-info-context";
import Image from "next/image";
import FacebookIcon from "../UI/Icons/FacebookIcon";
import TripAdvisorIcon from "../UI/Icons/TripAdvisorIcon";
import Map from "../UI/Icons/Map";
import Phone from "../UI/Icons/Phone";
import Email from "../UI/Icons/Email";
const Footer = ({ contactData }) => {
  let infoArray;

  infoArray = {
    streetAddress: contactData.acf.street_address,
    region: contactData.acf.region,
    phone: contactData.acf.phone,
    email: contactData.acf.email,
    facebook: contactData.acf.facebook,
    tripAdvisor: contactData.acf.trip_advisor,
    menuLog: contactData.acf.menu_log,
    openingHours: contactData.acf.opening_hours,
    closed: contactData.acf.closed_,
    copyright: contactData.acf.copyright,
    orderOnlineLink: contactData.acf.order_online_link,
    popUpImage: contactData.acf.pop_up_image,
  };
  return (
    <React.Fragment>
      <Container>
        <Content className="row-container">
          <ContactBox>
            <ColumnTitle color="var(--green)">Contact Us</ColumnTitle>
            <Items>
            

              <Anchor
                href={`tel: ${infoArray.phone}`}
                
              >
                <Phone/> 
                <span>
                {infoArray.phone}
                </span>
              
              </Anchor>

              <Anchor
                href={`mailto: ${infoArray.email}`}
                targetBlank="_blank"
              >
                <Email/> 
                <span> 
                {infoArray.email}
                </span>
                
              </Anchor>
              <Anchor href={`${infoArray.streetAddress}`}  targetBlank="_blank">
                <Map />
                <span>
                  {infoArray.streetAddress}{" "}
                  <SecondText>{infoArray.region}</SecondText>
                </span>
              </Anchor>
            </Items>
          </ContactBox>

          <LogoContainer>
            <Logo
              logoData={contactData.acf.logo}
              contWidth="250px"
              mobileWidth="220px"
            />
            <SocialContainer>
              <AnchorLinkIcon
                target="_blank"
                link={infoArray.facebook}
                size="35px"
              >
                <FacebookIcon />
              </AnchorLinkIcon>
              <AnchorLinkIcon
                target="_blank"
                link={infoArray.tripAdvisor}
                size="35px"
              >
                <TripAdvisorIcon />
              </AnchorLinkIcon>
            </SocialContainer>
          </LogoContainer>

          <OpeningHoursContainer>
            <ColumnTitle color="var(--green)">Opening Hours</ColumnTitle>
            <Items>
              {infoArray.openingHours.map((item, index) => {
                return (
                  <OpeningHoursItem key={index}>
                    <SecondText>{item.opening_days} </SecondText>
                    <SecondText>{item.opening_hours} </SecondText>
                  </OpeningHoursItem>
                );
              })}
            </Items>
          </OpeningHoursContainer>
        </Content>
        <Copyright copyright={infoArray.copyright} />
        <MobileFixedButtons
          orderOnlineLink={infoArray.orderOnlineLink}
          phoneNumber={infoArray.phone}
        />
      </Container>
      {/* 
            <PopupContainer>
                <Image src={infoArray.popUpImage} layout="responsive" width={100} height={100} />
            </PopupContainer> */}
    </React.Fragment>
  );
};

const Container = styled.section`
  background: var(--lightGreen);
  padding: 50px 0 0 0;
`;

const SecondText = styled.span`
  margin-left: 2px;
  display: block;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (max-width: 630px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const ContactBox = styled.div``;
const LogoContainer = styled.div`
  margin: 15px 0;
  @media (max-width: 630px) {
    margin: 20px 0 -20px 0;
  }
`;
const OpeningHoursContainer = styled.div``;
const Items = styled.div`
  margin-top: 10px;
  svg{ 
    width: 30px; 
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  margin: 20px auto;
  svg {
    width: 50px;
        &:hover{ 
            circle{ 
            fill: var(--darkGreen); 
        }
    }
   
  }
`;
const OpeningHoursItem = styled.div`
  margin-top: 5px;
  color: var(--green);
`;
const Anchor = styled.a`
  display: flex; 
  align-items: center; 
  font-size: 1rem;
  font-family: var(--poppins);
  font-weight: 400;
  color: var(--green);
  margin-bottom: 10px; 
  &:hover{ 
    color: var(--darkGreen);
    cursor: pointer;
    svg{ 
        circle{ 
         fill:    var(--darkGreen);
        }
    }
  }
  svg{ 
    margin-right: 5px; 
  }
`
const PopupContainer = styled.div`
  width: 70%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  overflow: scroll;
`;
export default Footer;
