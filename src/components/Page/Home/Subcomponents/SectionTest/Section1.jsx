import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Section1 = () => {
  return (
    <div className=" d-flex flex-column">
      {/* <div>sss</div> */}

      <Box
        sx={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
        my="10"
      >
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="240px"
          gap="20px"
          sx={
            {
              // border: " 1px solid red",
            }
          }
        >
          {[0, 1, 2, 3].map((item) => {
            return (
              <Box
                // gridColumn="span 3"
                // backgroundColor={colors.primary[400]}

                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  //   border: " 1px solid red",
                  gridColumn: {
                    xs: "span 12",
                    md: "span 3",
                    gap: "20px",
                  },
                }}
              >
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(12, 1fr)"
                  //   gridAutoRows="240px"
                  gap="20px"
                  sx={{
                    // border: " 1px solid red",
                    // backgroundColor: "blue",
                    // flex: 1,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {[0, 1].map((item) => {
                    return (
                      <Box
                        // gridColumn="span 3"
                        // backgroundColor={colors.primary[400]}

                        sx={{
                          backgroundColor: "blue",

                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: " 1px solid red",
                          gridColumn: {
                            xs: "span 12",
                            md: "span 6",
                          },
                          height: "100%",
                          width: "100%",
                          flex: "1",
                        }}
                      >
                        a
                      </Box>
                    );
                  })}
                </Box>
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(12, 1fr)"
                  //   gridAutoRows="240px"
                  gap="20px"
                  sx={{
                    // border: " 1px solid red",
                    // flex: 1,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {[0, 1].map((item) => {
                    return (
                      <Box
                        // gridColumn="span 3"
                        // backgroundColor={colors.primary[400]}

                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: " 1px solid red",
                          gridColumn: {
                            xs: "span 12",
                            md: "span 6",
                          },
                        }}
                      >
                        a
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
        {/* <Grid container spacing={10}>
          <Grid item spacing={0} xs="4"></Grid>
          <Grid item spacing={0} xs="4">
            <Grid
              container
              width={"100%"}
              spacing={0}
              xs="4"
              sx={{ border: "1px solid red" }}
            >
              <Grid item spacing={0} xs="4" sx={{ border: "1px solid red" }}>
                a
              </Grid>
              <Grid item spacing={0} xs="4" sx={{ border: "1px solid red" }}>
                a
              </Grid>
              <Grid item spacing={0} xs="4" sx={{ border: "1px solid red" }}>
                a
              </Grid>
            </Grid>
            <Grid container spacing={0} xs="4" sx={{ border: "1px solid red" }}>
              <Grid item spacing={0} xs="4" sx={{ border: "1px solid red" }}>
                a
              </Grid>
              <Grid item spacing={0} xs="4" sx={{ border: "1px solid red" }}>
                a
              </Grid>
              <Grid item spacing={0} xs="4" sx={{ border: "1px solid red" }}>
                a
              </Grid>
            </Grid>
          </Grid>
          <Grid item spacing={0} xs="4" sx={{ border: "1px solid red" }}>
            a
          </Grid>
        </Grid> */}
      </Box>
    </div>
  );
};

export default Section1;
