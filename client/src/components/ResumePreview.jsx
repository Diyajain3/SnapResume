import React from "react";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import MinimalImageTemplate from "./templates/MinimalImageTemplate";

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;
      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />;
      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  };
  return (
    <div className="w-full bg-gray-100">
      <div
        id="resume-preview"
        className={
          "border border-gray-200 print:shadow-none print:border-none" + classes
        }
      >
        {renderTemplate()}
      </div>
      <style>
        {`
          @page {
            size: letter;
            margin: 0;
          }
          @media print {
            html,
            body {
              width: 100%;
              height: auto;
              overflow: visible;
              background: white;
            }
            
            /* Hide non-print areas completely so they don't take layout space */
            .no-print,
            #root > div > div:first-child,
            .lg\\:col-span-5,
            .absolute.top-2.right-2 {
              display: none !important;
            }
            
            /* Reset grids and layout containers to block elements */
            .max-w-7xl,
            .grid,
            .lg\\:col-span-7 {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              border: none !important;
              box-shadow: none !important;
            }

            body * {
              visibility: hidden;
            }
            
            #resume-preview,
            #resume-preview * {
              visibility: visible;
            }
            
            #resume-preview {
              position: absolute;
              left: 0;
              top: 0;
              width: 100% !important;
              height: auto;
              margin: 0;
              padding: 0;
              box-shadow: none !important;
              border: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ResumePreview;
