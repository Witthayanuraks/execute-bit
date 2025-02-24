import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DecoderTool() {
  const [encodedText, setEncodedText] = useState("");
  const [decodedText, setDecodedText] = useState("");

  function decodeText() {
    let decoded = "";
    for (let char of encodedText) {
      let num = char.charCodeAt(0);
      decoded += String.fromCharCode(num >> 8) + String.fromCharCode(num & 0xff);
    }
    setDecodedText(decoded);
  }
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-xl font-bold">16-bit Encoding Decoder</h1>
      <Card className="w-full max-w-md">
        <CardContent className="p-4 flex flex-col gap-2">
          <Input
            placeholder="Masukkan teks terenkripsi..."
            value={encodedText}
            onChange={(e) => setEncodedText(e.target.value)}
          />
          <Button onClick={decodeText}>Decode</Button>
          {decodedText && (
            <div className="bg-gray-100 p-2 rounded mt-2">{decodedText}</div>
          )}
        </CardContent>
      </Card>
      <p className="text-gray-600">
        Created by{" "}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
         className="text-blue 700 "
        
         >
         </a>
          </p>
    </div>
  );
}