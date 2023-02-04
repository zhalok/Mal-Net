import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import Image from "next/image";
import ImageIcon from "../public/image.jpg";
import SelectItem from "../components/Select";
import axios from "../utils/axios";
import { PulseLoader, ClipLoader } from "react-spinners";

export default function Predict() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedModel, setSelectedModel] = useState("VGG19");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const models = ["VGG19", "Custom"];
  useEffect(() => {
    if (!image) return;
    setImageUrl(URL.createObjectURL(image));
  }, [image]);

  const predict = async () => {
    const formData = new FormData();
    if (!image) {
      setMessage("Please upload an image!!!");
      return;
    }
    formData.append("file", image);
    formData.append("model", selectedModel);
    setLoading(true);
    setResult("");
    axios
      .post("/predict", formData)
      .then((res) => {
        setResult(res.data.result);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (image) setMessage("");
  }, [image]);

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="container">
        <div
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image
              src={image ? imageUrl : ImageIcon}
              width={200}
              height={200}
            />
          </div>
          <div>
            <Button
              variant="contained"
              component="label"
              sx={{ marginTop: "50px" }}
            >
              Upload Image of Malaria Cell
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setResult("");
                }}
              />
            </Button>
          </div>
          <small style={{ color: "red" }}>{message}</small>
          <div style={{ marginTop: "20px" }}>
            <SelectItem
              item={selectedModel}
              items={models}
              label={"Select Model"}
              setItem={setSelectedModel}
            />
          </div>
          <div>
            {loading ? (
              <div
                style={{
                  width: "fit-content",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "20px",
                }}
              >
                <PulseLoader />
              </div>
            ) : (
              <div>
                <Button
                  variant="contained"
                  color="success"
                  component="label"
                  sx={{ marginTop: "20px", border: "1px solid black" }}
                  fullWidth
                  onClick={() => {
                    predict();
                  }}
                >
                  Predict
                </Button>
              </div>
            )}
          </div>
        </div>

        <h2
          className="center-div"
          style={{
            color: result == "Infected" ? "red" : "green",
          }}
        >
          {result ? result : loading ? "Analyzing..." : ""}
        </h2>
      </div>
    </div>
  );
}
