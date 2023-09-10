import SimpleBtn from "components/global/btns/SimpleBtn";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import ElasticBlock from "components/utils/ElasticBlock";

import { ReactComponent as Logo } from "assets/imgs/ic-logo_banner.svg";
import { ReactComponent as GoogleIcon } from "assets/icons/ic-google_icon.svg";
import { ReactComponent as TelegramIcon } from "assets/icons/ic-telegram_icon.svg";
import { ReactComponent as AppleIcon } from "assets/icons/ic-apple_icon.svg";
import Spacer from "components/utils/Spacer";
import styled from "@emotion/styled";
import { setVw } from "styles/global/globalScreen";
import { FadeInKf } from "utils/animations/BasicAnimations";
import { BottomToTopKf } from "utils/animations/BasicAnimations";
import Visibility from "components/utils/Visibility";
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useRef } from "react";
import VisibilityExist from "components/utils/VisibilityExist";

const GoogleIconWrapper = styled(GoogleIcon)`
  position: absolute;

  ${setVw("width", 32)};
  ${setVw("height", 32)};

  top: 50%;
  transform: translateY(-50%);
  left: 20px;
`;

const TelegramIconWrapper = styled(TelegramIcon)`
  position: absolute;

  ${setVw("width", 32)};
  ${setVw("height", 32)};

  top: 50%;
  transform: translateY(-50%);
  left: 20px;
`;

const AppleIconWrapper = styled(AppleIcon)`
  position: absolute;

  ${setVw("width", 32)};
  ${setVw("height", 32)};

  top: 50%;
  transform: translateY(-50%);
  left: 20px;
`;

const LogoWrapper = styled(Logo)`
  ${setVw("width", 250)};
  ${setVw("height", 250)};

  animation: ${FadeInKf} 0.6s ease-in-out, ${BottomToTopKf} 0.6s ease-in-out;
`;

function SignInPage() {
  const googleSocialLogin = useGoogleLogin({
    scope: "email profile",
    onSuccess: async ({ code }) => {
      console.log(code);
      // axios
      //   .post("http://localhost:4000/auth/google/callback", { code })
      //   .then(({ data }) => {
      //     console.log(data);
      //   });
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: "auth-code",
  });

  const moveToProfile = () => {
    window.location.href = "/profile";
  }

  return (
    <BasicLayout>
      <InnerLayout>
        <ElasticBlock h={100} />
        <LogoWrapper />
        <ElasticBlock h={100} />

        <SimpleBtn onClick={googleSocialLogin}>
          <GoogleIconWrapper>
            <GoogleIcon />
          </GoogleIconWrapper>
          <Spacer />
          Start with Google
          <Spacer />
        </SimpleBtn>

        <ElasticBlock h={20} />
        <SimpleBtn onClick={moveToProfile}>
          <TelegramIconWrapper>
            <TelegramIcon />
          </TelegramIconWrapper>
          <Spacer />
          Start with Telegram
          <Spacer />
        </SimpleBtn>

        <ElasticBlock h={20} />
        <SimpleBtn>
          <AppleIconWrapper>
            <AppleIcon />
          </AppleIconWrapper>
          <Spacer />
          Start with Apple
          <Spacer />
        </SimpleBtn>
      </InnerLayout>
    </BasicLayout>
  );
}

export default SignInPage;
