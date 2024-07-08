import {useMemo} from "react";
import {createTheme} from "@mui/material";
import {themeSettings} from "@/theme.ts";
import {CssBaseline, ThemeProvider} from "@mui/material";

function App() {
    const theme = useMemo(() => createTheme(themeSettings), [])
    return (
        <div className="app">
        <ThemeProvider theme={theme}>
            <CssBaseline />
            Hello
        </ThemeProvider>
    </div>
    );
}

export default App
