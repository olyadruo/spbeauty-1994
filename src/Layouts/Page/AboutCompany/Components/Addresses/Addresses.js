import { Container } from "react-bootstrap";
import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components";

const AddressesBlock = styled.div`
  border: 1px solid rgba(100, 116, 139, 0.12);
  border-radius: 8px;
  padding: 24px;
  width: 453px;
`;

function Addresses() {
  return (
    <AddressesBlock className="d-inline-flex flex-column justify-content-between p-4">
      <div className="d-inline-flex flex-column">
        <div className="title mb-4">Адреса заведений</div>
        <div className="d-inline-flex flex-column gap-2">
          <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
          <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
        </div>
      </div>
      <SecondaryButton>Добавить филиал</SecondaryButton>
    </AddressesBlock>
  );
}

export default Addresses;
