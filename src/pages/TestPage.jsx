import styled from "@emotion/styled";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import SizedBox from "components/utils/SizedBox";
import QrScanner from "qr-scanner";
import QRCode from "qrcode";
import { useEffect } from "react";

const CameraContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CameraView = styled.video`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const QrCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

function TestPage() {
  const testLink = "https://t.me/Dean_0_0";

  const qrScanHandler = () => {
    const cameraView = document.getElementById("camera");
    const qrScanner = new QrScanner(cameraView, (result) => {
      console.log(result);

      qrCodeHandler(result);

      qrScanner.stop();
    });

    qrScanner.start();
  };

  const qrCodeHandler = (result) => {
    const qrCanvas = document.getElementById("canvas");

    QRCode.toCanvas(qrCanvas, result, function (error) {
      if (error) console.error(error);
      console.log("success!");
    });
  };

  useEffect(() => {
    qrScanHandler();
  }, []);

  return (
    <BasicLayout>
      <InnerLayout>
        <h1>Test Page</h1>
        <SizedBox w="100px" h="100px">
          <CameraView id="camera" />
        </SizedBox>

        <SizedBox w="100px" h="100px">
          <QrCanvas id="canvas" />
        </SizedBox>
      </InnerLayout>
    </BasicLayout>
  );
}

export default TestPage;
