/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';
import InputMaskCnpj from 'react-number-format';

import { Container, Text, Button, Term, Form, Input } from './styles';

class Home extends Component {
  state = {
    document: '',
    verify: '',
  };

  handleChange = e => {
    this.setState({ document: e.target.value.replace(/[^0-9]+/g, '') });
  };

  handleCheck = e => {
    this.setState({ verify: e.target.checked });
  };

  render() {
    const { document, verify } = this.state;
    const If = props => (props.check ? props.children : null);
    return (
      <Container>
        <Text>
          <div>
            <strong>Veja seus boletos DAS na hora com a DicasMEI!</strong>
          </div>
          <div>
            <span>
              Preencha as informações abaixo e veja todo o histórico de boletos.
            </span>
          </div>
        </Text>
        <Form onChange={this.handleSubmit}>
          <InputMaskCnpj
            name="cnpj"
            required
            placeholder="CNPJ"
            format="##.###.###/####-##"
            customInput={Input}
            value={document}
            onChange={this.handleChange}
          />

          <div>
            <Checkbox
              type="checkbox"
              required
              value={verify}
              onChange={this.handleCheck}
            />

            <span>
              Li e aceito os <Term to="/termodeuso">termos de uso</Term>
            </span>
          </div>
          <If check={document.length === 14}>
            <If check={verify}>
              <Button type="button" to={`/boleto/extrato/${document}`}>
                Iniciar Agora
              </Button>
            </If>
          </If>
        </Form>
      </Container>
    );
  }
}
export default Home;
