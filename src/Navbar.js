import React, { useContext } from 'react'
import {
    AppBar, 
    Toolbar,
    IconButton,
    Switch,
    Typography,
    InputBase
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const context = {
    english: {
        search: 'Search',
        flag: "🎨"
    },
    french: {
        search: 'Chercher',
        flag: "✨"
    },
    spanish: {
        search: 'Buscar',
        flag: "💥"
    }
};

function Navbar(props) {
    const { classes } = props;
    const { language } = useContext(LanguageContext);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { search, flag } = context[language];
    return (
        <div>
            <AppBar position="static" color={isDarkMode ? 'default' : "primary"}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <span role="img" aria-label="accessible description">{flag}</span>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        App Title
                    </Typography>
                    <Switch onChange={toggleTheme} />
                    <div className={classes.grow} />
                    <div className={classes.search} isDarkMode={isDarkMode}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder={`${search}...`}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.input
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default withStyles(styles)(Navbar);