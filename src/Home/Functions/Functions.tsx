import { Input, Button } from "antd";
import React, { useRef, useState } from "react";

const Functions = () => {
  const inputRef = useRef<any>(null);
  const [data, setData] = useState<string>("");

  const nonRepeating = () => {
    console.log("clicked", inputRef?.current.input.value);
    const val = inputRef?.current.input.value.split("").splice(1);
    console.log("valval", val);
    let n: any = inputRef?.current.input.value.split("")[0];
    console.log("nnnnn:", n);
    const charCount = new Map<string, number>();

    for (const char of val) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (const char of val) {
      if (charCount.get(char) === 1) {
        if (--n === 0) {
          setData(char);
          return;
        }
      }
    }
    setData("No value null/none");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
        padding: "5%",
      }}
    >
      <div>
        <Input
          style={{
            color: "red",
            marginBottom: "2vh",
          }}
          ref={inputRef}
        />
      </div>
      <div>
        <Button
          type="primary"
          onClick={() => {
            nonRepeating();
          }}
        >
          Submit
        </Button>
      </div>
      <div style={{ color: "white" }}>{data}</div>
    </div>
  );
};

export default Functions;
