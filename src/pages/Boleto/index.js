import React, { Component } from 'react';

// import Login from '../../services/login';

import {
  Container,
  Text,
  ProductList,
  Items,
  Button,
  Accordion,
} from './styles';

class Boleto extends Component {
  /* const email = 'api_user';
  const password = 'api_entrevista';

  Login(email, password); */
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleInClick = this.handleInClick.bind(this);
    this.handleOutClick = this.handleOutClick.bind(this);
  }

  handleInClick() {
    this.setState({ isOpen: true });
  }

  handleOutClick() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    let button;
    if (isOpen) {
      button = <Button onClick={this.handleOutClick}>Em aberto</Button>;
    } else {
      button = <Button onClick={this.handleInClick}>Em aberto</Button>;
    }
    const If = props => (props.check ? props.children : null);
    return (
      <Container>
        <Text>
          <div>
            <strong>Meus Boletos DAS</strong>
          </div>
          <div>
            <span>Veja a relação completa de seus boletos DAS.</span>
          </div>
        </Text>
        <ProductList isOpen>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items error>
            <span>Out</span>
            <strong>17</strong>
            <div>
              R$<b>50,</b>89
            </div>
            {button}
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
          <Items>
            <span>Jun</span>
            <strong>18</strong>
            <div>
              R$<b>50,</b>89
            </div>
            <p>Pago</p>
          </Items>
        </ProductList>

        <If check={isOpen}>
          <Accordion>
            {/* Animção em acordion ou uma Model action */}
            <div>
              <p>Outubro/17</p>
              <strong>
                <b>50,</b>70
              </strong>
              <small>20/07/2017</small>
            </div>
            <div>
              <span>8170000000 0 01093659970 2 4113079703 9 00143370831 8</span>
            </div>
            <button type="button">Abrir</button>
            <button type="button">Enviar por email</button>
            <button type="button">Enviar por whatsapp</button>
          </Accordion>
        </If>
      </Container>
    );
  }
}

export default Boleto;
