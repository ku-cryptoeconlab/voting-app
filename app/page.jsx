import React from "react";
import { Box, Button, Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Box id="home" className="w-full h-screen text-center relative">
        <h1 className="mt-32 mx-30 text-[#0a2540]">
          Discover Decentralized Delegating
        </h1>
        <p className="mx-56 mt-6 text-[#435466]">
          Welcome to our decentralized voting platform, designed specifically
          for student organizations to facilitate secure and transparent
          elections. This innovative app harnesses the power of blockchain
          technology to ensure that each vote is recorded on a tamper-proof
          ledger, promoting trust and integrity in the electoral process.
        </p>

        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 2, mr: 2 }}
          href="/generate"
        >
          Get Started
        </Button>
        <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </Box>
    </Container>
  );
}
