import styled from "styled-components";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import EditIcon from "../../../../../Icons/EditIcon";
import RemoveIcon from "../../../../../Icons/RemoveIcon";
import IconOnlyButton from "../../../../../Components/IconOnlyButton.js";

const Option = styled.div`
  outline: none;
  border-radius: 0px;
  color: #666787;
`;

function ListElement(props) {
  return (
    <div className="d-flex flex-row align-items-center align-self-stretch pb-4 justify-content-between">
      <Option className="flex-grow-1">{props.children}</Option>
      <IconOnlyButton icon={<EditIcon />} />
      <IconOnlyButton icon={<RemoveIcon />} />
    </div>
  );
}

export default ListElement;
