import { PassesAPI } from "passes-protocol";

declare global {
  interface Document {
    passes?: PassesAPI;
  }
}