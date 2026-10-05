import sourceDocuments from "./legal-documents.json";
import { contactChannels, legalContactDetails, sellerDetails } from "./site";
import { createLegalTextValues, type LegalDocument } from "@/lib/legalContent";

export const legalDocuments = sourceDocuments as LegalDocument[];

export const legalTextValues = createLegalTextValues(sellerDetails, contactChannels, legalContactDetails);
