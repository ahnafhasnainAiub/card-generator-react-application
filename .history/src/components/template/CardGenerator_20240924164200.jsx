import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CardForm from "../organisms/CardForm";
import Card from "../organisms/Card";
import Button from "../atoms/Button";
import { MenuIcon, XIcon } from "@heroicons/react/solid"; // Assuming heroicons is installed

const CardGenerator = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const downloadCard = () => {
    const input = document.getElementById("card");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("card.pdf");
    });
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row">
        {/* Hamburger menu for mobile view */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-4 focus:outline-none"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>

          <div
            className={`fixed inset-y-0 left-0 bg-gray-800 w-4/5 z-50 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out overflow-y-auto`}
          >
            <div className="p-4">
              <h1 className="text-2xl mb-4">Card Generator</h1>
              <CardForm />
            </div>
          </div>
        </div>

        {/* Left portion: the form */}
        <div className="hidden md:block md:w-1/2 lg:w-1/3 p-8 bg-gray-800">
          <h1 className="text-2xl mb-4">Card Generator</h1>
          <CardForm />
        </div>

        {/* Right portion: the card and download button */}
        <div className="fixed top-0 right-0 p-4 md:translate-x-1/2 md:translate-y-1/2 transform md:top-16 md:right-16">
          <div className="max-w-xs bg-gray-900 p-4 rounded-lg shadow-md">
            <div id="card">
              <Card />
            </div>
            <Button onClick={downloadCard}>Download Card</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGenerator;