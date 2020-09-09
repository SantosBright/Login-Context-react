import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
    return (
        <ThemeProvider>
            <PageContent>
                <LanguageProvider>
                    <Navbar />
                    <Form />
                </LanguageProvider>
            </PageContent>
        </ThemeProvider>
    );
}

export default App;