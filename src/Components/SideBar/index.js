import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SideBarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
          <Icon>
            <CloseIcon />
          </Icon>
            <SidebarMenu>
                    <SidebarLink to='/'>Pizzas</SidebarLink>
                    <SidebarLink to='/'>Sobremesas</SidebarLink>
                    <SidebarLink to='/'>Todos os Produtos</SidebarLink>
            </SidebarMenu>
          <SideBtnWrap>
                 <SidebarRoute to='/'>Peça Já</SidebarRoute>
          </SideBtnWrap>
        </SidebarContainer>
      );
    };
    
    export default Sidebar;