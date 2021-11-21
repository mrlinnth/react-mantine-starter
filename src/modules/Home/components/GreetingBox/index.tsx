import { Input, InputWrapper } from "@mantine/core";
import { nameAtom } from "atoms/greetingBox";
import { useAtom } from "jotai";
import React from "react";

const GreetingBox = () => {
  const [name, setName] = useAtom(nameAtom);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  return (
    <InputWrapper
      id="input-demo"
      required
      label="Name"
      description={"You have entered " + name}
    >
      <Input id="input-demo" placeholder="Enter name" onChange={handleChange} />
    </InputWrapper>
  );
};

export default GreetingBox;
