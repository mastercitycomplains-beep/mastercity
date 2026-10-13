"use client";

import * as React from "react";
import { Download, Printer, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeActions() {
  const [downloading, setDownloading] = React.useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulates instant CV generation/download
    const element = document.createElement("a");
    element.setAttribute("href", "/alex-vance-resume.pdf");
    element.setAttribute("download", "Alex_Vance_Staff_Engineer_Resume.pdf");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => {
      setDownloading(false);
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex items-center gap-3 print:hidden">
      <Button onClick={handleDownload} size="md">
        {downloading ? (
          <>
            <Check className="w-4 h-4 mr-2 text-emerald-400" />
            <span>Downloaded CV</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4 mr-2" />
            <span>Download PDF CV</span>
          </>
        )}
      </Button>
      <Button onClick={handlePrint} variant="outline" size="md">
        <Printer className="w-4 h-4 mr-2" />
        <span>Print Version</span>
      </Button>
    </div>
  );
}
