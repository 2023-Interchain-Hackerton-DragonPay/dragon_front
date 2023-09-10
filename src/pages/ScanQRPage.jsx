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

  // const sendBalance = async () => {
  //   if (window.keplr) {
  //     const key = await window.keplr.getKey("osmo-test-5");
  //     const protoMsgs = {
  //       typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  //       value: MsgSend.encode({
  //         fromAddress: key.bech32Address,
  //         toAddress: recipient,
  //         amount: [
  //           {
  //             denom: "uosmo",
  //             amount: DecUtils.getTenExponentN(6).mul(new Dec(amount)).truncate().toString(),
  //           },
  //         ],
  //       }).finish(),
  //     }

  //     try {
  //       const gasUsed = await simulateMsgs(
  //         OsmosisChainInfo,
  //         key.bech32Address,
  //         [protoMsgs],
  //         [{denom: "uosmo",
  //           amount: "236",}]
  //         );

  //       if(gasUsed) {
  //         await sendMsgs(
  //           window.keplr,
  //           OsmosisChainInfo,
  //           key.bech32Address,
  //           [protoMsgs],
  //           {
  //             amount: [{denom: "uosmo",
  //               amount: "236",}],
  //             gas: Math.floor(gasUsed * 1.5).toString(),
  //           })
  //       }
  //     } catch (e) {
  //       if (e instanceof Error) {
  //         console.log(e.message);
  //       }
  //     }

  //   }
  // }

  const qrScanHandler = () => {
    const cameraView = document.getElementById("qr-camera");
    const qrScanner = new QrScanner(cameraView, (result) => {
      if (isScanning) return;

      isScanning = true;
      setIsLoading(true);
      openModal({
        type: ModalType.Loading,
        params: {
          title: "QR Code",
          data: result,
        },
      });

      setTimeout(() => {
        window.location.href = "/complete";
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
