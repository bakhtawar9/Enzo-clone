import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Divider,
  Grid,
  Link as MuiLink,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const Layout = () => {
  const [receiptUploaded, setReceiptUploaded] = useState(false); // Toggle between views
  const [receiptData, setReceiptData] = useState({
    receiptNumber: "INV-001",
    purchaseOrderNumber: "243729042",
    referenceNumber: "243729042",
    purchaseDate: "24/12/2024",
    dueDate: "26/12/2024",
    paymentDate: "26/12/2024",
    totalNet: "$150",
    totalAmount: "$200",
    totalTax: "$9.75",
    taxes: "$9.75",
    supplierName: "John Smith",
  });

  const handleTryAnother = () => {
    setReceiptUploaded(false);
  };

  const handleDownload = () => {
    alert("Downloading receipt...");
    // Add download logic
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: 4, gap: 4 }}>
      {receiptUploaded ? (
        <>
          {/* Receipt Details Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {/* Paper with image */}
            <Paper
              elevation={3}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 4,
                borderRadius: "20px",
                backgroundColor: "#F7F8FA",
                width: "100%",
                minWidth: "645px",
                height: "702px"
              }}
            >
              {/* Receipt Image */}
              <Box
                component="img"
                src="/EnzoAI.png"
                alt="Receipt"
                sx={{
                  width: "100%",
                  minWidth: "438px",
                  mb: 2,
                  borderRadius: "13px",
                  height: "620px"
                }}
              />
            </Paper>

            {/* Buttons below the Paper */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 1,
              }}
            >
              <Button
                variant="outlined"
                startIcon={<AutorenewIcon />}
                onClick={handleTryAnother}
                sx={{
                  border: "1px solid #6C5DD3", color: "#6C5DD3", width: "240px", height: "56px", borderRadius: "12px",
                  fontSize: "16px", fontWeight: "600", textTransform: "none"
                }}
              >
                Try Another Receipt
              </Button>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                sx={{
                  width: "240px", height: "56px", borderRadius: "12px",
                  fontSize: "16px", fontWeight: "600",
                  textTransform: "none",
                  backgroundColor: "#6C5DD3",
                  "&:hover": { backgroundColor: "#5A4EC7" },
                }}
              >
                Download
              </Button>
            </Box>
          </Box>

          {/* Receipt Metadata Section */}
          <Paper
            sx={{
              flex: 0.6,
              p: 4,
              height: "843px",
              width: "412px",
              backgroundColor: "#FFFFFF",
              borderLeft: "1px solid #E4E4E4",
              borderTop: "none",
              borderRight: "none",
              borderBottom: "none",
              boxShadow: "none",
            }}
          >
            <Grid container spacing={2}>
              {Object.entries(receiptData).map(([key, value]) => (
                <Grid item xs={12} sm={12} key={key}>
                  <Typography sx={{ color: "#353535", fontSize: "14px", fontWeight: "400" }}>
                    {key.replace(/([A-Z])/g, " $1")}:
                  </Typography>
                  <Typography sx={{ color: "#000", fontWeight: "400", fontSize: "14px" }}>
                    {value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <MuiLink
              href="#"
              underline="hover"
              sx={{ display: "block", mt: 2, color: "#6C5DD3", fontWeight: "600", fontSize: "16px" }}
            >
              See Extra Details
            </MuiLink>
          </Paper>

        </>
      ) : (
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
            borderRadius: "16px",
            backgroundColor: "#F7F8FA",
          }}
        >
          <Typography variant="h5" sx={{ mb: 4 }}>
            Upload a Receipt
          </Typography>
          <Button
            variant="contained"
            onClick={() => setReceiptUploaded(true)}
            sx={{
              backgroundColor: "#6C5DD3",
              "&:hover": { backgroundColor: "#5A4EC7" },
            }}
          >
            Simulate Upload
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default Layout;


