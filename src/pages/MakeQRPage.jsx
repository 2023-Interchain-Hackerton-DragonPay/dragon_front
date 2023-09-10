import SimpleBtn from "components/global/btns/SimpleBtn";
import LabeledInput from "components/global/inputs/LabeledInput";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import { useModal } from "components/providers/ModalProvider";
import ElasticBlock from "components/utils/ElasticBlock";
import { useEffect, useLayoutEffect, useState } from "react";
import { sleep } from "utils/utilsFunctions";
import QRCode from "qrcode";

// mode 0: long term qr, mode 1: short term qr
function MakeQRPage() {
  const { openModal, params } = useModal();
  const [mode, setMode] = useState(0); // [0, 1]

  const [name, setName] = useState("User Name");
  const [price, setPrice] = useState(0);
  const [receiver, setReceiver] = useState("");
  const [currency, setCurrency] = useState("USDT");

  const qrCodeHandler = (data) => {
    const qrCanvas = document.getElementById("qr-code");

    QRCode.toCanvas(qrCanvas, data, function (error) {
      if (error) console.error(error);
      console.log("success!");
    });
  };

  const clickMakeQRHandler = async () => {
    // make qr
    // const key = await window.keplr.getKey("osmo-test-5");
    // console.log(key);

    openModal({
      type: "basic",
      params: {
        title: "QR Code",
        content: "QR Code",
      },
    });

    await sleep(1000);

    try {
      qrCodeHandler(
        JSON.stringify({
          name,
          price,
          receiver,
          currency,
          time: mode === 0 ? 0 : new Date().getTime(),
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  useLayoutEffect(() => {
    const url = window.location.href;
    const params = url.split("/");
    const id = params[params.length - 1];
    console.log(id);

    setMode(id);
  }, []);

  return (
    <BasicLayout>
      <InnerLayout>
        <ElasticBlock h={100} />
        <LabeledInput
          title={"Name"}
          value={name}
          setValue={setName}
          active={false}
        />

        <ElasticBlock h={30} />
        <LabeledInput
          title={"Price"}
          value={price}
          setValue={setPrice}
          unit={"OSMO"}
        />

        <ElasticBlock h={30} />
        <LabeledInput
          title={"Receiver"}
          value={receiver}
          setValue={setReceiver}
          placeholder="Put Receiver's Address"
        />

        <ElasticBlock h={30} />
        <LabeledInput
          title={"Currency"}
          value={currency}
          setValue={setCurrency}
          active={false}
        />

        <ElasticBlock h={80} />
        <SimpleBtn onClick={clickMakeQRHandler}>Get QR Code</SimpleBtn>
      </InnerLayout>
    </BasicLayout>
  );
}

export default MakeQRPage;
