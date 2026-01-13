import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const ExportPDFButton = ({ targetId = 'main-content' }) => {
  // Capture the main content area and generate a branded PDF export.
  const exportPDF = async () => {
    const element = document.getElementById(targetId)
    if (!element) return

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: null,
      useCORS: true
    })

    const imageData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: 'a4' })
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height)
    const imgWidth = canvas.width * ratio
    const imgHeight = canvas.height * ratio

    pdf.addImage(imageData, 'PNG', (pageWidth - imgWidth) / 2, 20, imgWidth, imgHeight)
    pdf.save('tak-business-dashboard.pdf')
  }

  return (
    <button
      onClick={exportPDF}
      className="rounded-full border border-slate-200/60 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
    >
      Export PDF
    </button>
  )
}

export default ExportPDFButton
