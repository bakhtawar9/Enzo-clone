import React, { useState } from 'react';
import { Switch, Button, Select, MenuItem, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Preferences = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [region, setRegion] = useState('Europe');
    const [language, setLanguage] = useState('English');
    const [reportsEnabled, setReportsEnabled] = useState(true);
    const [frequency, setFrequency] = useState('Once a week');
    const [email, setEmail] = useState('example@gmail.com');
    const { t } = useTranslation();
    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
            {/* Dark Mode */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <p style={{ fontSize: '18px', fontWeight: '400' }}>{t('darkMode')}</p>
                <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    color="primary"
                />
            </div>

            {/* Region */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <p style={{ fontSize: '18px', fontWeight: '400' }}>{t('region')}</p>
                <Select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    style={{ width: '350px', borderRadius: '30px', backgroundColor: '#f7f7f7', padding: '0px' }}
                >
                    <MenuItem value="Europe">{t('europe')}</MenuItem>
                    <MenuItem value="North America">{t('northAmerica')}</MenuItem>
                    <MenuItem value="Asia">{t('asia')}</MenuItem>
                </Select>
            </div>

            {/* Language */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <p style={{ fontSize: '18px', fontWeight: '400' }}>{t('language')}</p>
                <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    style={{ width: '350px', borderRadius: '30px', backgroundColor: '#f7f7f7', padding: '0px' }}
                >
                    <MenuItem value="English">{t('english')}</MenuItem>
                    <MenuItem value="Spanish">{t('spanish')}</MenuItem>
                    <MenuItem value="French">{t('french')}</MenuItem>
                </Select>
            </div>

            <hr style={{ color: '#f7f7f7' }} />


            {/* Reports */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <p style={{ fontSize: '18px', fontWeight: '400' }}>{t('enableReports')}</p>
                <Switch
                    checked={reportsEnabled}
                    onChange={() => setReportsEnabled(!reportsEnabled)}
                    color="primary"
                />
            </div>

            {reportsEnabled && (
                <>
                    {/* Frequency */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <p style={{ fontSize: '18px', fontWeight: '400' }}>{t('frequency')}</p>
                        <Select
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                            style={{ width: '350px', borderRadius: '30px', backgroundColor: '#f7f7f7', padding: '0px' }}
                        >
                            <MenuItem value="Once a week">{t('onceAWeek')}</MenuItem>
                            <MenuItem value="Daily">{t('daily')}</MenuItem>
                            <MenuItem value="Monthly">{t('monthly')}</MenuItem>
                        </Select>
                    </div>

                    {/* Send To */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <p style={{ fontSize: '18px', fontWeight: '400' }}>{t('sendTo')}</p>
                        <TextField
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            variant="outlined"
                            InputProps={{
                                sx: {
                                    borderRadius: '30px',
                                    width: '350px',
                                    backgroundColor: '#f7f7f7'
                                },
                            }}
                        />
                    </div>
                </>
            )}

            {/* Save Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <Button
                    variant="contained"
                    style={{
                        background: 'linear-gradient(135deg, #16e9c2, #23a3eb)',
                        color: '#fff',
                        padding: '10px 50px',
                        borderRadius: '20px',
                        textTransform: 'none'
                    }}
                >
                    {t('saveButton')}
                </Button>
            </div>
        </div>
    );
};

export default Preferences;



