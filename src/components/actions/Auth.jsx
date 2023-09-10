import CircleOpacityWaveLoading from "components/global/loading/CircleOpacityWaveLoading";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import Block from "components/utils/Block";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { sleep } from "utils/utilsFunctions";

function Checker({ page }) {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);

  async function checkAuth() {
    await sleep(2 * 1000); // Simulate Loading
    return true;
    // const token = localStorage.getItem("token");

    // if (token) {
    //     return true;
    // } else {
    //     return false;
    // }
  }

  useEffect(() => {
    checkAuth()
      .then((result) => {
        setIsAuth(result);
        if (!result) {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
        window.location.href = "/";
      });
  }, [location]);

  if (!isAuth) {
    // Set Loading Component
    return (
      <BasicLayout>
        <InnerLayout>
          <Block h={120} />
          <CircleOpacityWaveLoading />

          <Block h={20} />
          <h1>Loading...</h1>
        </InnerLayout>
      </BasicLayout>
    );
  }

  return page;
}

export function Auth(page) {
  return <Checker page={page} />;
}
