import React from "react";
import logo from "../assets/icons/logo-icon.svg";
import map from "../assets/icons/map-icon.svg";
import tell from "../assets/icons/tell-icon.svg";
import email from "../assets/icons/email-icon.svg";
import facebook from "../assets/icons/facebook-icon.svg";
import twinter from "../assets/icons/twinter-icon.svg";
import instagram from "../assets/icons/instagram-icon.svg";
import linkedin from "../assets/icons/linkedin-icon.svg";

import
{
    SiteFooter,
    SiteContent,
    FooterMain,
    ContactHeading,
    ContactIconsContent,
    ContactIcon,
    FooterText,
    SocialList,
    FooterList,
    FooterHeading,
    FooterItem,
    FooterItemLink,
    FooterBottom,
} from "./style"


class Footer extends React.Component
{
    render ()
    {
        return (
            <SiteFooter>
                <FooterMain>
                    <SiteContent >
                        <div>
                            <ContactHeading>Contact Us</ContactHeading>
                            <ContactIconsContent>
                                <ContactIcon src={ map } alt="map" />
                                <FooterText>
                                    329 Queensberry Street, North <br /> Melbourne VIC 3051,
                                    Australia.
                                </FooterText>
                            </ContactIconsContent>

                            <ContactIconsContent>
                                <ContactIcon src={ tell } alt="tell" />
                                <FooterText>123 456 7890</FooterText>
                            </ContactIconsContent>

                            <ContactIconsContent>
                                <ContactIcon src={ email } alt="email" />
                                <FooterText>support@houzing.com</FooterText>
                            </ContactIconsContent>

                            <SocialList>
                                <li className="contact-social-item">
                                    <a href="asd" className="contact-social-link">
                                        <img className="facebook-icon" src={ facebook } alt="" />
                                    </a>
                                </li>
                                <li className="contact-social-item">
                                    <a
                                        href="https://echo.htmlacademy.ru"
                                        className="contact-social-link"
                                    >
                                        <img className="twitter-icon" src={ twinter } alt="" />
                                    </a>
                                </li>
                                <li className="contact-social-item">
                                    <a
                                        href="https://echo.htmlacademy.ru"
                                        className="contact-social-link"
                                    >
                                        <img className="instagram-icon" src={ instagram } alt="" />
                                    </a>
                                </li>
                                <li className="contact-social-item">
                                    <a
                                        href="https://echo.htmlacademy.ru"
                                        className="contact-social-link"
                                    >
                                        <img className="linkedin-icon" src={ linkedin } alt="" />
                                    </a>
                                </li>
                            </SocialList>
                        </div>
                        <div className="site-footer-discovre-wrapper">
                            <FooterList>
                                <FooterItem>
                                    <FooterHeading>Discover</FooterHeading>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        Chicago
                                    </FooterItemLink>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        Los Angeles
                                    </FooterItemLink>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        Miami
                                    </FooterItemLink>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        New York
                                    </FooterItemLink>
                                </FooterItem>
                            </FooterList>
                        </div>
                        <div className="site-footer-category-wrapper">
                            <FooterList>
                                <FooterItem>
                                    <FooterHeading>Lists by Category</FooterHeading>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        Apartments
                                    </FooterItemLink>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        Condos
                                    </FooterItemLink>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        Houses
                                    </FooterItemLink>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        Offices
                                    </FooterItemLink>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        Retail
                                    </FooterItemLink>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        Retail
                                    </FooterItemLink>
                                </FooterItem>
                            </FooterList>
                        </div>
                        <div className="site-footer-wrapper">
                            <FooterList>
                                <FooterItem>
                                    <FooterHeading>Lists by Category</FooterHeading>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        About Us
                                    </FooterItemLink>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink href="https://echo.htmlacademy.ru">
                                        LTerms & Conditions
                                    </FooterItemLink>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink
                                        href="https://echo.htmlacademy.ru"
                                    >
                                        Support Center
                                    </FooterItemLink>
                                </FooterItem>
                                <FooterItem>
                                    <FooterItemLink
                                        href="https://echo.htmlacademy.ru"
                                    >
                                        Contact Us
                                    </FooterItemLink>
                                </FooterItem>
                            </FooterList>
                        </div>
                    </SiteContent>
                </FooterMain>
                <FooterBottom>
                    <img className="site-footer-logo" src={ logo } alt="" />
                    <FooterText>
                        Copyright © 2021 CreativeLayers. All Right Reserved.
                    </FooterText>
                </FooterBottom>
            </SiteFooter>
        );
    }
}

export default Footer