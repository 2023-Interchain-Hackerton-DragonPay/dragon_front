import { ModalType, useModal } from "components/providers/ModalProvider";
import BasicModal from "./widgets/BasicModal";
import LoadingModal from "./widgets/LoadingModal";

function RootModal() {
    const { isModalOpen, type } = useModal();

    if(!isModalOpen) return null;

    switch(type) {
        case ModalType.Basic:
            return <BasicModal />;
        case ModalType.Confirm:
            return null;
            // return <ConfirmModal />;
        case ModalType.Success:
            return null;
            // return <SuccessModal />;
        case ModalType.Loading:
            return <LoadingModal />;
        case ModalType.Warning:
            return null;
            // return <WarningModal />;
        case ModalType.Error:
            return null;
            // return <ErrorModal />;
        default:
            return null;
    }
}

export default RootModal;