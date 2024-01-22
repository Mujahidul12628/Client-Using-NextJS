'use client'

import Form from "@/utils/Form";
import FormData from "@/utils/FormData";
import HomePage from "@/utils/HomePage";
import { useEffect, useState } from "react"

export default function Home() {
 
  return (
    <main className="container p-4 mx-auto">
      
    <HomePage></HomePage>
      {/* <Form></Form> */}
      <FormData></FormData>
   

  </main>
  );
}
