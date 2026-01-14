import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import V2 from "./pages/V2";
import V3 from "./pages/V3";
import V4 from "./pages/V4";
import V5 from "./pages/V5";
import V6 from "./pages/V6";
import V7 from "./pages/V7";



function Router() {
  return (
     <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/v2"} component={V2} />
      <Route path={"/v3"} component={V3} />
      <Route path={"/v4"} component={V4} />
      <Route path={"/v5"} component={V5} />
      <Route path={"/v6"} component={V6} />
      <Route path={"/v7"} component={V7} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
