import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ width: "100%", bottom: 0, height: "100px" }}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 3, sm: 7 }}
        bgcolor="#5F6164"
        color="white"
        fontSize="18px"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12}>
              <Box borderBottom={1}>Account</Box>
              <br />
              <Box>
                <Link
                  to="/HomeScreen/login"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Login
                </Link>
              </Box>
              <Box>
                <Link
                  to="/HomeScreen/Register"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Register
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            color="white"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
          >
            College Alumni Portal &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}