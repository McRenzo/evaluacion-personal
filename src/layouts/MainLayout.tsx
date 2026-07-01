import { Outlet, Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const drawerWidth = 280;

const principalItems = [
  { text: "Dashboard", path: "/", icon: "📊" },
  { text: "Usuarios", path: "/usuarios", icon: "👥" },
  { text: "Áreas", path: "/areas", icon: "🏢" },
  { text: "Cargos", path: "/cargos", icon: "💼" },
  { text: "Fichas", path: "/fichas", icon: "📝" },
  { text: "Evaluaciones", path: "/evaluaciones", icon: "✅" },
  { text: "Reportes", path: "/reportes", icon: "📈" },
];

const configuracionItems = [
  { text: "Asignaciones", path: "/asignaciones", icon: "🛡️" },
  { text: "Configuración", path: "/configuracion", icon: "⚙️" },
];

type SidebarItem = {
  text: string;
  path: string;
  icon: string;
};

function SidebarSection({
  title,
  items,
}: {
  title: string;
  items: SidebarItem[];
}) {
  const location = useLocation();

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        sx={{
          px: 3,
          mb: 1.5,
          fontSize: 14,
          fontWeight: 800,
          letterSpacing: 1.5,
          color: "#9aa8b8",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>

      <List disablePadding>
        {items.map((item) => {
          const active = location.pathname === item.path;

          return (
            <ListItemButton
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                minHeight: 68,
                px: 3,
                borderLeft: active
                  ? "4px solid #1f5c49"
                  : "4px solid transparent",
                bgcolor: active ? "#edf6f1" : "transparent",
                "&:hover": {
                  bgcolor: "#f3f8f6",
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  mr: 1.4,
                  fontSize: 20,
                  width: 24,
                  display: "inline-flex",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </Box>

              <ListItemText
                primary={
                    <Typography
                    sx={{
                        fontSize: 18,
                        fontWeight: active ? 800 : 700,
                        color: active ? "#143f34" : "#68788a",
                    }}
                    >
                    {item.text}
                    </Typography>
                }
                />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: 1201,
          bgcolor: "#ffffff",
          color: "#143f34",
          borderBottom: "1px solid #eef1f4",
        }}
      >
        <Toolbar sx={{ minHeight: 72 }}>
          <Typography variant="h6" noWrap sx={{ fontWeight: 800 }}>
            Sistema de Evaluación de Personal
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid #eef1f4",
            bgcolor: "#ffffff",
          },
        }}
      >
        <Toolbar sx={{ minHeight: 72 }} />

        <Box sx={{ py: 4, overflow: "auto" }}>
          <SidebarSection title="Principal" items={principalItems} />
          <SidebarSection title="Configuración" items={configuracionItems} />
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f7f9fb",
          minHeight: "100vh",
          p: 4,
        }}
      >
        <Toolbar sx={{ minHeight: 72 }} />
        <Outlet />
      </Box>
    </Box>
  );
}