import BasicLayout from "components/layouts/BasicLayout";
import Block from "components/utils/Block";

function NotFound() {
  return (
    <BasicLayout>
      <Block h={120} />
      <h1 style={{fontSize: 36}}>404</h1>

      <Block h={10} />
      <p>Page not found</p>
    </BasicLayout>
  );
}

export default NotFound;