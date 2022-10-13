import React from "react";

import Movies from "./Movies";
import Form from "./Form";

const Home = () => {
  return (
    <main className=" max-w-screen-full mx-auto">
      <Form></Form>
      <Movies></Movies>
    </main>
  );
};

export default Home;
