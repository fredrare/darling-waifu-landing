import React, { useEffect } from "react";
import { navigate } from "gatsby";

const Page404 = () => {
  useEffect(() => {
    navigate("/");
  }, []);
  return <></>;
};

export default Page404;
