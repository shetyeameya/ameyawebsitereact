import React from "react";

const { REACT_APP_IMAGES_URL, REACT_APP_SECRET_KEY } = process.env;
type Bucket = "family" | "romeo" | "food" | "sports";
console.log("process:::", REACT_APP_IMAGES_URL);

export const getImages = async (bucket: Bucket) => {
  try {
    const response = await fetch(`${REACT_APP_IMAGES_URL}/${bucket}`, {
      method: "GET",
      headers: {
        mode: "cors",
        Authorization: REACT_APP_SECRET_KEY || "",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!response.ok) {
      console.log("entere1", response);
      return null;
    }

    const imageList = await response.json();
    if (imageList && imageList.length > 0) {
      console.log("entere22221", imageList);
      return imageList;
    }
  } catch (error: any) {
    console.log("error entered");
    console.error("error:::", error);
    // setData(null);
    return null;
  }
};
