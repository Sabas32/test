import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Export the main dashboard content into a PDF for direct download.
export const exportDashboardToPdf = async () => {
  const target = document.getElementById("dashboard-content");
  if (!target) return;

  const canvas = await html2canvas(target, {
    scale: 2,
    backgroundColor: null
  });

  const imageData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(`tak-business-dashboard-${new Date().toISOString().slice(0, 10)}.pdf`);
};
