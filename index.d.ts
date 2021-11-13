declare module "pdfkit-table" {
  import PDFDocument from "pdfkit";

  class PDFDocumentWithTables extends PDFDocument {
    table(table: any, options: any): this;
  }

  export = PDFDocumentWithTables;
}
