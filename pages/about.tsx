import { NextPage } from "next";
import Header from "components/Header";
import Footer from "components/Footer";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Header />
      <div>あばうと建設予定地</div>
      <Footer />
    </div>
  );
};

export default IndexPage;
