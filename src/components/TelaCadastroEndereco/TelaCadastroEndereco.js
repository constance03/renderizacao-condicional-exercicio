import { Form, FormContainer, Input, StyledLabel, SendButton } from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro </h1>
      <Form>
        <StyledLabel>
          Endereço:
          <Input />
        </StyledLabel>
        <StyledLabel>
          Número da Residencia:
          <Input />
        </StyledLabel>
        <StyledLabel>
          Telefone:
          <Input />
        </StyledLabel>
        <StyledLabel>
          Complemento:
          <Input />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
