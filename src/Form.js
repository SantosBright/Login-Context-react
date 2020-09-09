import React, { useContext } from 'react'
import {
    Avatar,
    Button,
    FormControl,
    FormControlLabel,
    Checkbox,
    Input,
    InputLabel,
    Paper,
    MenuItem,
    Select,
    Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
    english: {
        signIn: "Sign In",
        email: "Email",
        password: "Password",
        remember: "Remember"
    },
    french: {
        signIn: "Se Connecter",
        email: "Adresse Electronique",
        password: "Mot de Passe",
        remember: "Souviens-toi De Moi"
    },
    spanish: {
        signIn: "Registrarse",
        email: "Correo Electronico",
        password: "Contrasena",
        remember: "Recuedame"
    }
};

function Form(props) {
    const { classes } = props;
    const { language, changeLanguage } = useContext(LanguageContext);
    const { email, signIn, password, remember } = words[language];
    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{signIn}</Typography>
                <Select value={language} onChange={changeLanguage}>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                </Select>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor='email'>{email}</InputLabel>
                        <Input id="email" name="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor='password'>{password}</InputLabel>
                        <Input id="password" name="password" />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label={remember}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        color="primary"
                        className={classes.submit}
                    >
                        {signIn}
                    </Button>
                </form>
            </Paper>
        </main>
    );
}

export default withStyles(styles)(Form);