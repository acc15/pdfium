import type { PDFiumRenderFunction, PDFiumRenderOptions } from "./types";

export type PDFiumPageRenderFunction = PDFiumRenderFunction;
export type PDFiumPageRenderOptions = PDFiumRenderOptions;

export type PDFiumPageRenderCallback = (options: PDFiumPageRenderOptions) => Promise<Uint8Array>;
export type PDFiumPageRenderParams = {
  render: PDFiumPageRenderFunction;
  scale?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export type PDFiumPageSize = {
  width: number;
  height: number;
};

export type PDFiumPageRender = {
  width: number;
  height: number;
  originalHeight: number;
  originalWidth: number;
  data: Uint8Array;
};
