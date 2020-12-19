import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

export default function NavBar({ version }) {
  return (
    <Menu fixed='top' position='left' size='massive'>
      <Menu.Item as={NavLink} exact to='/' header>
        <Icon name='wifi' size='large' />
        OmniFleet
      </Menu.Item>
      <Menu.Item
        name='version'
        content={"Version " + version}
        position='right'
      />
    </Menu>
  );
}
