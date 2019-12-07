import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Shield } from './styles';

import logo from '../../assets/images/logo.svg';
import shield from '../../assets/images/shield.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Dicas MEI" />
      </Link>

      <Shield>
        <div>
          <strong>Ambiente seguro </strong>
          <span>Seus dados protegidos</span>
        </div>
        <img src={shield} alt="Dicas MEI" />
      </Shield>
    </Container>
  );
}
