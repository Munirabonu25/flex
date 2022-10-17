import React from "react";

import { Modal, Title, InputFeild, Search, ModalInfoFeild, Price, ModalFooter, BtnClear } from "./styles"
import { cardObj } from "../mock";

class AdvancedModal extends React.Component
{
  constructor ( props )
  {
    super( props );
    this.state = {
      cardObj,
    };
  }
  render ()
  {
    //// (e) => onFilter(e)  FUNCTION start code
    const onFilter = ( { target } ) =>
    {
      let { value, name } = target
      if ( value )
      {
        let res = cardObj.filter( ( item ) =>
          `${ item[ name ] }`.toLowerCase().includes( `${ value }`.toLowerCase() )
        );
        console.log( res );
        this.setState( { cardObj: res } );

      } else
      {
        this.setState( { cardObj } );
      }
    };

    //// onClear  FUNCTION start code
    const onClear = () => { };

    return (
      <Modal>
        <Title>Address</Title>
        <InputFeild>
          <Search
            onChange={ ( e ) => onFilter( e ) }
            name="title"
            type="text"
            placeholder="Country"
          />
          <Search
            onChange={ ( e ) => onFilter( e ) }
            name="description"
            type="text"
            placeholder="Region"
          />
          <Search
            onChange={ ( e ) => onFilter( e ) }
            name="city"
            type="text"
            placeholder="City"
          />
          <Search
            onChange={ ( e ) => onFilter( e ) }
            name="zip code"
            type="text"
            placeholder="Zip code"
          />
        </InputFeild>
        <Title>Apartment info</Title>
        <ModalInfoFeild>
          <Search
            onChange={ ( e ) => onFilter( e ) }
            name="iconTitle1"
            type="text"
            placeholder="Rooms"
          />
          <Search
            onChange={ ( e ) => onFilter( e ) }
            name="iconTitle4"
            type="text"
            placeholder="Size"
          />
          <Search
            onChange={ ( e ) => onFilter( e ) }
            name="sort"
            type="text"
            placeholder="Sort"
          />
        </ModalInfoFeild>
        <Title>Price</Title>
        <Price>
          <Search
            onChange={ ( e ) => onFilter( e ) }
            name="price1"
            type="text"
            placeholder="Min price"
          />
          <Search
            onChange={ ( e ) => onFilter( e ) }
            name="price2"
            type="text"
            placeholder="Max price"
          />
        </Price>
        <ModalFooter>
          <BtnClear onClick={ onClear }>Clear</BtnClear>
        </ModalFooter>
      </Modal>
    );
  }
}

export default AdvancedModal;
