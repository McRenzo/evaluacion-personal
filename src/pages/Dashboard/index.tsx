import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Chip,
} from "@mui/material";

const stats = [
  { title: "Evaluaciones pendientes", value: "12", detail: "Este bimestre" },
  { title: "Personal evaluado", value: "85", detail: "De 120 registrados" },
  { title: "Promedio general", value: "17.8", detail: "Sobre 20" },
  { title: "Bimestre actual", value: "II", detail: "Año 2026" },
];

const latest = [
  {
    name: "María Torres",
    area: "Administración",
    score: "Muy Bueno",
    status: "Finalizada",
  },
  {
    name: "Carlos Ramos",
    area: "Docencia",
    score: "Bueno",
    status: "Finalizada",
  },
  {
    name: "Lucía Pérez",
    area: "Secretaría",
    score: "Pendiente",
    status: "Pendiente",
  },
];

export default function Dashboard() {
  return (
    <Box>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, color: "#143f34", mb: 1 }}
          >
            Dashboard
          </Typography>

          <Typography sx={{ color: "#68788a", fontSize: 18 }}>
            Resumen general del sistema de evaluación de personal.
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#1f5c49",
            borderRadius: 3,
            px: 3,
            py: 1.3,
            textTransform: "none",
            fontWeight: 800,
            "&:hover": {
              bgcolor: "#174538",
            },
          }}
        >
          Nueva evaluación
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid #eef1f4",
                boxShadow: "0 10px 30px rgba(20, 63, 52, 0.05)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    color: "#68788a",
                    fontWeight: 700,
                    fontSize: 15,
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 36,
                    fontWeight: 900,
                    color: "#143f34",
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {item.value}
                </Typography>

                <Typography sx={{ color: "#9aa8b8", fontSize: 14 }}>
                  {item.detail}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid #eef1f4",
              minHeight: 360,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography
                sx={{ fontSize: 20, fontWeight: 900, color: "#143f34", mb: 1 }}
              >
                Evaluaciones por área
              </Typography>

              <Typography sx={{ color: "#68788a", mb: 4 }}>
                Vista preliminar de estadísticas del bimestre.
              </Typography>

              <Box
                sx={{
                  height: 220,
                  borderRadius: 4,
                  bgcolor: "#f7f9fb",
                  border: "1px dashed #d8e1e8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9aa8b8",
                  fontWeight: 700,
                }}
              >
                Gráfico próximamente
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid #eef1f4",
              minHeight: 360,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography
                sx={{ fontSize: 20, fontWeight: 900, color: "#143f34", mb: 3 }}
              >
                Últimas evaluaciones
              </Typography>

              {latest.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    py: 2,
                    borderBottom: "1px solid #eef1f4",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "#143f34" }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ color: "#68788a", fontSize: 14 }}>
                      {item.area}
                    </Typography>
                  </Box>

                  <Chip
                    label={item.score}
                    size="small"
                    sx={{
                      fontWeight: 800,
                      bgcolor:
                        item.status === "Pendiente" ? "#fff7e6" : "#edf6f1",
                      color:
                        item.status === "Pendiente" ? "#9a6700" : "#1f5c49",
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}