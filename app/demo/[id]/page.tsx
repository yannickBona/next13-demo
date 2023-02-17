import { NextPage } from "next";
import React from "react";

const page: NextPage<{ params: { id: string } }> = ({ params }) => {
  return <div>id is: {params.id}</div>;
};

export default page;
