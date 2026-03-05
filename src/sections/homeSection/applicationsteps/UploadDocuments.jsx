"use client";
import React, { useRef,useState  } from "react";
import styles from "@/sections/homeSection/AdmissionProcedure/applicationform.module.css";
import {
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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

  const removeFile = (key) => {
    setForm((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [key]: null,
      },
    }));
  };
const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Typography mb={2} className={styles.sectionTitle}>
        UPLOAD YOUR DOCUMENT
      </Typography>

      <Typography mb={4} fontSize={14}>
        Note: File size should be less than 1 MB*
      </Typography>

      <Box display="flex" gap={3} flexWrap="wrap">
        {docs.map((doc) => {
          const file = form.documents?.[doc.key];
          const isImage = file && file.type.startsWith("image");

          return (
            <Box
              key={doc.key}
              onClick={() => fileRefs.current[doc.key].click()}
              sx={{
                width: 170,
                height: 170,
                border: file
                  ? "2px dashed #2e7d32"
                  : documentsError
                    ? "2px dashed #d32f2f"
                    : "2px dashed #999",
                borderRadius: 2,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                cursor: "pointer",
                textAlign: "center",
                overflow: "hidden",
                transition: "0.2s",
                "&:hover": {
                  border: "2px dashed #1976d2",
                  background: "#fafafa",
                },
              }}
            >
              <input
                type="file"
                hidden
                ref={(el) => (fileRefs.current[doc.key] = el)}
                onChange={(e) => handleFileChange(e, doc.key)}
              />

              {/* Remove Button */}
              {file && (
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(doc.key);
                  }}
                  sx={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    background: "#fff",
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              )}

              {/* Image Preview */}
              {isImage ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginBottom: "6px",
                  }}
                />
              ) : file ? (
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#555" }} />
              ) : null}

              <Typography fontWeight={500}>
                {file ? "✔ " : ""}
                {doc.label}
              </Typography>

              <Typography
                fontSize={12}
                sx={{
                  maxWidth: "90%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {file ? file.name : "Click to upload"}
              </Typography>
            </Box>
          );
        })}
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
        label={
          <>
            I Agree All The{" "}
            <span
              style={{
                color: "#1976d2",
                cursor: "pointer",
                textDecoration: "underline",
                fontWeight: 500,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setOpenModal(true);
              }}
            >
              Terms & Conditions
            </span>
          </>
        }
      />

      {termsError && (
        <Typography
          variant="caption"
          sx={{ color: "#d32f2f", mt: 1, display: "block" }}
        >
          You must accept{" "}
          <span
            style={{
              color: "#1976d2",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => setOpenModal(true)}
          >
            Terms & Conditions
          </span>
          to continue
        </Typography>
      )}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="md"
        sx={{ zIndex: 9999999 }}
        PaperProps={{
          sx: {
            borderRadius: "16px",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>
          Terms & Conditions
          <IconButton
            aria-label="close"
            onClick={() => setOpenModal(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ px: 4, py: 3, lineHeight: 1.8 }}>
          <p className={styles.modalPara}>
            By enrolling in our courses, you agree to abide by the institute
            rules, policies, and academic guidelines outlined below.
          </p>

          <h3 className={styles.modalHeading}>1. Acceptance of Terms</h3>
          <p className={styles.modalPara}>
            By enrolling in our courses you agree to abide by these terms and
            institutional policies.
          </p>

          <h3 className={styles.modalHeading}>2. Eligibility & Admission</h3>
          <p className={styles.modalPara}>
            Applicants must meet academic qualifications (High School / Any
            Degree). All submitted documents must be genuine; false information
            may result in cancellation of admission.
          </p>

          <h3 className={styles.modalHeading}>3. Enrollment & Fees</h3>
          <p className={styles.modalPara}>
            Admissions are subject to eligibility and seat availability. Fees
            once paid are non-refundable and must be paid according to the
            communicated schedule.
          </p>

          <h3 className={styles.modalHeading}>4. Code of Conduct</h3>
          <p className={styles.modalPara}>
            Students must maintain professional behavior and respect faculty,
            peers, and institute property. Violations may lead to suspension or
            expulsion.
          </p>

          <h3 className={styles.modalHeading}>5. Intellectual Property</h3>
          <p className={styles.modalPara}>
            All course materials are the intellectual property of ALO School of
            Design & Technology and may not be reproduced or distributed without
            written permission.
          </p>

          <h3 className={styles.modalHeading}>6. Certificate Issuance</h3>
          <p className={styles.modalPara}>
            Certificates will be awarded only after successful completion of the
            program and fulfillment of all academic requirements.
          </p>

          <h3 className={styles.modalHeading}>7. Changes to Courses</h3>
          <p className={styles.modalPara}>
            The institute reserves the right to update course content,
            structure, or faculty when necessary.
          </p>

          <h3 className={styles.modalHeading}>8. Participation in Events</h3>
          <p className={styles.modalPara}>
            Students are encouraged to participate in academic and
            extracurricular activities while maintaining academic performance.
          </p>

          <h3 className={styles.modalHeading}>9. Changes to Terms</h3>
          <p className={styles.modalPara}>
            Terms may be updated periodically. Students will be notified of any
            significant changes.
          </p>

          <h2 className={styles.modalMainTitle}>Privacy Policy</h2>

          <h3 className={styles.modalHeading}>Information Collection</h3>
          <p className={styles.modalPara}>
            We collect personal information such as name, email, phone number,
            educational background, and payment details during registration.
          </p>

          <h3 className={styles.modalHeading}>Use of Information</h3>
          <p className={styles.modalPara}>
            Information is used to process admissions, provide academic
            services, communicate updates, and improve user experience.
          </p>

          <h3 className={styles.modalHeading}>Data Protection</h3>
          <p className={styles.modalPara}>
            Personal data is stored securely and will not be sold or shared
            without consent. Security measures are implemented to prevent
            unauthorized access.
          </p>

          <h3 className={styles.modalHeading}>Third-Party Tools</h3>
          <p className={styles.modalPara}>
            We may use third-party platforms for learning and payments, which
            have their own privacy policies.
          </p>

          <h2 className={styles.modalMainTitle}>Attendance Policy</h2>
          <p className={styles.modalPara}>
            Students must maintain at least 80% attendance. Low attendance may
            affect evaluations, certification, and placement support.
          </p>

          <h2 className={styles.modalMainTitle}>Refund Policy</h2>
          <p className={styles.modalPara}>
            All fees including application, registration, and tuition are
            strictly non-refundable under any circumstances.
          </p>

          <h2 className={styles.modalMainTitle}>Declaration</h2>
          <p className={styles.modalPara}>
            I declare that all information provided is accurate. Any false
            details may result in cancellation of enrollment.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadDocuments;
