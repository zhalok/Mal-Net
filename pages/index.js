import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Welcome to Mal-Net</h1>
        <h2>AI powered malaria cell detection</h2>
      </div>

      <div className="container">
        <div style={{}}>
          Recognize infected malaria cell image with Convolutional Neural
          Network
        </div>
      </div>
    </div>
  );
}
