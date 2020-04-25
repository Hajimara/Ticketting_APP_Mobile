import React from 'react';
import styled from 'styled-components';

const TicketFormBox = styled.View``;
const TicketFormWapper = styled.View``;
const TicketFormLogo = styled.Text`
  font-size: 24px;
`;
const TicketForm = () => {
  return (
    <TicketFormBox>
      <TicketFormWapper>
        <TicketFormLogo>Myhome이다</TicketFormLogo>
      </TicketFormWapper>
    </TicketFormBox>
  );
};

export default TicketForm;
