import React from 'react';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CardForm from '../organisms/CardForm';
import Card from '../organisms/Card';
import Button from '../atoms/Button';

const CardGenerator = () => {
  const downloadCard = () => {
    const input = document.getElementById('card');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('card.pdf');
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl mb-4">Card Generator</h1>
      <CardForm />
      <div id="card">
        <Card />
      </div>
      <Button onClick={downloadCard}>Download Card</Button>
    </div>
  );
};

export default CardGenerator;