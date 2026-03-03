"use client";
import React, { useRef } from "react";
import styles from "@/sections/homeSection/AdmissionProcedure/applicationform.module.css";
import { Typography, Box, Checkbox, FormControlLabel } from "@mui/material";

const docs = [
  { key: "image", label: "Image" },
  { key: "signature", label: "Signature" },
  { key: "aadhar", label: "Aadhar" },
  { key: "marksheet", label: "Marksheet" },
  { key: "tc", label: "TC" },
];

const UploadDocuments = ({ form, setForm, termsError, documentsError }) => {
  const fileRefs = useRef({});

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (!file) return;

    // file size check (1MB)
    if (file.size > 1024 * 1024) {
      alert("File must be less than 1MB");
      return;
    }

    setForm((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [key]: file,
      },
    }));
  };

  return (
    <>
      <Typography mb={2} className={styles.sectionTitle}>
        UPLOAD YOUR DOCUMENT
      </Typography>

      <Typography mb={4} fontSize={14}>
        Note: File size should be less than 1 MB*
      </Typography>

      <Box display="flex" gap={3} flexWrap="wrap">
        {docs.map((doc) => (
          <Box
            key={doc.key}
            onClick={() => fileRefs.current[doc.key].click()}
            sx={{
              width: 170,
              height: 170,
              border:
                documentsError && !form.documents?.[doc.key]
                  ? "2px dashed #d32f2f"
                  : "2px dashed #999",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <input
              type="file"
              hidden
              ref={(el) => (fileRefs.current[doc.key] = el)}
              onChange={(e) => handleFileChange(e, doc.key)}
            />

            <Typography fontWeight={500}>{doc.label}</Typography>
            <Typography fontSize={12}>
              {form.documents?.[doc.key]
                ? form.documents[doc.key].name
                : "Click to upload"}
            </Typography>
          </Box>
        ))}
      </Box>
      {documentsError && (
        <Typography
          variant="caption"
          sx={{ color: "#d32f2f", mt: 2, display: "block" }}
        >
          Please upload all required documents
        </Typography>
      )}
      <FormControlLabel
        sx={{ mt: 4 }}
        control={
          <Checkbox
            checked={form.agreeTerms}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                agreeTerms: e.target.checked,
              }))
            }
          />
        }
        label="I Agree All The Terms & Conditions"
      />
      {termsError && (
        <Typography
          variant="caption"
          sx={{ color: "#d32f2f", mt: 1, display: "block" }}
        >
          You must accept Terms & Conditions to continue
        </Typography>
      )}
    </>
  );
};

export default UploadDocuments;
