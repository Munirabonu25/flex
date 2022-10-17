import React from "react";
import home from "../assets/icons/home-icon.svg";
// import status from "./assets/icons/status-icon.svg";
// import price from "./assets/icons/price-icon.svg";
import advansed from "../assets/icons/advensed-icon.svg";
import loupe from "../assets/icons/loupe-icon.svg";
import AdvancedModal from "../advancedModal/index"

import
{
    SearchInpField,
    InpAddressWrapper,
    InpAddressIcon,
    SearchInpAddress,
    // StatusIcon,
    // PriceIcon,
    AdvansedIcon,
    LoupeIcon,
    // InpStatus,
    // InpPrice,
    BtnAdvanced,
    BtnSearch,
    HeaderTextWrapper,
    HeaderHeading,
    HeaderText,
} from "./styled"


class Header extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            active: false
        }
    }
    render ()
    {
        const activeModal = () =>
        {
            this.setState( { active: !this.state.active } )
        }
        console.log( this.state.active );
        return (
            <header className="site header">
                <div className="content">

                    <SearchInpField>
                        <InpAddressWrapper>
                            <InpAddressIcon src={ home } alt="" />
                            <SearchInpAddress
                                type="text"
                                placeholder="Enter an address, neighborhood, city, or ZIP code"
                            />
                        </InpAddressWrapper>


                        {/* <InpAddressWrapper>
                            <StatusIcon src={ status } alt="" />
                            <InpStatus
                                type="text"
                                placeholder="Status"
                            />
                        </InpAddressWrapper> */}
                        {/* <InpAddressWrapper>
                            <PriceIcon src={ price } alt="" />
                            <InpPrice                           type="text"
                                placeholder="Price"
                            />
                        </InpAddressWrapper> */}
                        <InpAddressWrapper>
                            <AdvansedIcon src={ advansed } alt="" />
                            <BtnAdvanced onClick={ activeModal }> Advanced </BtnAdvanced>
                        </InpAddressWrapper>
                        <InpAddressWrapper>
                            <LoupeIcon src={ loupe } alt="" />
                            <BtnSearch>
                                Search</BtnSearch>
                        </InpAddressWrapper>
                    </SearchInpField>
                    {
                        this.state.active && <AdvancedModal />
                    }

                    <HeaderTextWrapper>
                        <HeaderHeading>Properties</HeaderHeading>
                        <HeaderText>
                            Nulla quis curabitur velit volutpat auctor bibendum consectetur
                            sit.
                        </HeaderText>
                    </HeaderTextWrapper>
                </div>

            </header>
        );
    }
}

export default Header;
