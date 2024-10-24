'use client'
import { useSelector } from "react-redux";
import Image from "next/image";
import { useState } from "react";
import { Pricing } from "@/components/Pricing";

import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <ThemeToggle/>
      <div className="my-5 flex flex-col justify-center items-center title">
        <h1 className="text-dark-blue font-bold text-3xl xs:text-2xl dark:text-strong-cyan">Simple, traffic-based pricing</h1>
        <h3 className="text-grayish-blue">Sign-up for our 30-day trial. No credit card required.</h3>
      </div>
      <Pricing />
    </main>
  )
}
