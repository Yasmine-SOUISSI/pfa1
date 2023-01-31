// routes
import Router from './routes';
// theme
import ThemeProvider from './Admin/theme';
// components
import ScrollToTop from './Admin/components/scroll-to-top';

// ----------------------------------------------------------------------

export default function Admin() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}
