import React from "react";

interface EditProps {
  params: {
    id: string;
  };
}

async function EditPage({ params }: EditProps) {
  const res = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params.id),
  });
  const resData = await res.json();
  console.log(resData);
  return <div>{params.id}</div>;
}

export default EditPage;
