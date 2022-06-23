import { Button, Modal } from "react-bootstrap";
interface IShow {
  showBool: boolean;
  toShow: () => void;
  contentModal: JSX.Element;
  nameButton: string;
}
export const ModalWindow = ({
  showBool,
  toShow,
  contentModal,
  nameButton,
}: IShow) => {
  return (
    <>
      <Button variant="success col-12" onClick={toShow}>
        {nameButton}
      </Button>

      <Modal show={showBool} onHide={toShow}>
        {contentModal}
      </Modal>
    </>
  );
};
