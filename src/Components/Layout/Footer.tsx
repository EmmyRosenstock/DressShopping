import React from 'react';

import { Header, Icon } from 'semantic-ui-react';



const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <Header as="h2">
        <Icon name="cart" />
        <Header.Content>
         Dress Shooping
        </Header.Content>
      </Header>
     
    </div >
  );
};

export default Footer;