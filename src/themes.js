import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
    palette: {
        primary: blue,
        secondary: blue,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
       color: red
    },
    overrides: {
        RaSidebar: {
            drawerPaper: {
                marginTop: '0 !important',
                height: 'calc(100vh - 48px)'
            }
        },
        RaLayout: {
            content: {
                padding: '0 !important',
                height: 'calc(100vh - 48px)'
            }
        }
    }
});
