import React, { useState, useEffect } from 'react';
import { Responsive } from 'semantic-ui-react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import styled from 'styled-components';
import Item from './Item';
import MenuIcon from './MenuIcon';
const ROUTES = [
  {
    name: 'about-us',
    smooth: true,
    to: '/#about-us',
  },
  {
    name: 'services',
    smooth: true,
    to: '/#services',
  },
  {
    name: 'process',
    smooth: true,
    to: '/#process',
  },
  {
    name: 'our-work',
    smooth: true,
    to: '/#our-work',
  },
  {
    name: 'careers',
    smooth: false,
    to: '/careers',
  },
  {
    name: 'contact',
    smooth: false,
    to: '/#contact',
  },
];

const MenuDesctop = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};
  background-color: ${({ isFixed, theme }) =>
    isFixed ? theme.colors.blue : theme.colors.transparent};
  z-index: 1;
  width: 100%;
  padding: 10px 0;
  a {
    padding: 1rem 5px;
    font-size: 1.3rem;
    border: none;
    box-shadow: none;
  }
  a:nth-last-child(1) {
    padding: 1rem 2rem;
  }
`;

const MenuMobile = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};
  flex-wrap: wrap;
  top: 0;
  left: 0;
  z-index: 1;
  padding-top: ${({ theme }) => `${3 * theme.padding}px`};
  background-color: ${({ visibility, isFixed, theme }) =>
    visibility || isFixed ? theme.colors.blue : theme.colors.transparent};
  a {
    width: 100vw;
    font-size: 1.5rem;
    background-color: #002056;
    padding: ${({ theme }) => `${1.5 * theme.padding}px`} 0;
  }
  .menu__icon {
    margin: 0 20px 20px auto;
  }
  .logo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    max-height: ${({ theme }) => `${4 * theme.padding}px`};
    margin-left: ${({ theme }) => `${theme.padding}px`};

    a {
      width: 100%;
      background-color: transparent;
      font-size: 1.5rem;
      padding: 0;
    }
  }
`;

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState('about-us');
  const [isFixed, setFixed] = useState(false);

  const listenScrollEvent = (event) => {
    console.log(window.scrollY > window.innerHeight);
    if (window.scrollY <= window.innerHeight) {
      return setFixed(false);
    } else if (window.scrollY > window.innerHeight) {
      return setFixed(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);
  const handleItemClick = (e) => setActiveItem(e.target.name);

  return (
    <>
      <Responsive maxWidth={1023}>
        <MobileBar
          activeItem={activeItem}
          handleItemClick={handleItemClick}
          isFixed={isFixed}
        />
      </Responsive>
      <Responsive minWidth={1024}>
        <DesctopBar
          activeItem={activeItem}
          handleItemClick={handleItemClick}
          isFixed={isFixed}
        />
      </Responsive>
    </>
  );
};
const DesctopBar = ({ isFixed, ...rest }) => {
  return (
    <MenuDesctop text inverted isFixed={isFixed}>
      <Logo />
      {ROUTES.map((route) => (
        <Item key={`menu-${route.name}`} route={route} {...rest} />
      ))}
      <Button>Chat</Button>
    </MenuDesctop>
  );
};

const MobileBar = ({ isFixed, ...rest }) => {
  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility(!visibility);
  return (
    <MenuMobile pointing secondary stackable inverted isFixed={isFixed}>
      <Logo />
      <MenuIcon toggleVisibility={toggleVisibility} />

      {ROUTES.map(
        (route) =>
          visibility && (
            <Item key={`menu-${route.name}`} route={route} {...rest} />
          )
      )}
    </MenuMobile>
  );
};

export default MenuBar;
