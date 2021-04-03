import React from "react";

import App from "../src/components/chat/App.js";
import Layout from "../src/components/Layout";

export default function Home() {
  return (
    <React.Fragment>
      <Layout short brightFooter>
        <App />
      </Layout>
    </React.Fragment>
  );
}
