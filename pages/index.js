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
      <div className="container">
        <h1>Welcome To Malnet</h1>
      </div>
    </div>
  );
}
