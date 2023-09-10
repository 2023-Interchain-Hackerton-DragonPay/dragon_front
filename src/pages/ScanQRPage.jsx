import styled from "@emotion/styled";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import { ModalType, useModal } from "components/providers/ModalProvider";
import ElasticBlock from "components/utils/ElasticBlock";
import QrScanner from "qr-scanner";
import { useEffect, useState } from "react";
import { setVw } from "styles/global/globalScreen";

const CameraView = styled.video`
  ${setVw("width", 400)};
  ${setVw("height", 400)};

  object-fit: cover;
`;

let isScanning = false;

function ScanQRPage() {
  const { openModal, closeModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);

  const qrScanHandler = () => {
    const cameraView = document.getElementById("qr-camera");
    const qrScanner = new QrScanner(cameraView, (result) => {
      if (isScanning) return;
      console.log(result);

      isScanning = true;
      setIsLoading(true);
      openModal({
        type: ModalType.Loading,
        params: {
          title: "QR Code",
          content: result,
        },
      });

      setTimeout(() => {
        isScanning = false;
        setIsLoading(false);
        closeModal();
      }, 5000);
    });

    qrScanner.start();
  };

  useEffect(() => {
    qrScanHandler();
  }, []);

  return (
    <BasicLayout>
      <InnerLayout>
        <ElasticBlock h={80} />
        <CameraView id="qr-camera" />
      </InnerLayout>
    </BasicLayout>
  );
}

export default ScanQRPage;
