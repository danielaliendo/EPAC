import { createMuiTheme } from '@material-ui/core/styles';
import './../styles/App.css';
import red from '@material-ui/core/colors/red';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#da251c'
        },
        secondary: {
            main: '#ffffff',
        },
        common: {
            black: '#000',
            white: '#fff',
        }
    }
});
export default theme
