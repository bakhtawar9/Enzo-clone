import React, { useState } from 'react';
import { TextField, Button, Typography, Link, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

const CustomButton = styled(Button)({
    background: 'linear-gradient(135deg, #16e9c2, #23a3eb)',
    borderRadius: '50px',
    color: 'white',
    padding: '5px 20px',
    marginTop: '20px',
    textTransform: 'none',
    fontSize: '16px',
});
  

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { t } = useTranslation();

    const handleLogin = () => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        console.log('Login data stored in localStorage');
    };
    return (
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center"  overflow="hidden" 
    sx={{ overflow: 'hidden' }}>
            {/* Left Box */}
            <Box
                sx={{
                    display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                backgroundColor:"black",
                color:"white",
                flex:"1",
                textAlign:"left",
                minHeight:"100vh",
                 padding:"0 10px"
                }}
            >
                <Box sx={{ maxWidth: "400px" }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '20px',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        <img
                            src="/EnzoAI.png"
                            alt="Logo"
                            style={{ width: '40px', height: '40px', borderRadius: '10%', marginRight: '10px' }}
                        />
                        <h1 style={{ margin: 0 }}>EnzoAI</h1>
                    </div>
                    <Typography sx={{ width: '100%', textAlign: 'left', fontSize: '30px', fontWeight: 'bold' }}>  {t('believe')}</Typography>
                    <Typography sx={{ width: '100%', textAlign: 'left' }}>{t('ferrari')}</Typography>
                </Box>
            </Box>

            {/* Right Box */}
            <Box
            sx={{ display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                flex:"1",
                padding:"0 10px",
                minHeight:"100vh"}}
            >
                <Box sx={{ textAlign: 'left', width: '100%', maxWidth: '400px' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                    {t('login')}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                    {t('welcome')}
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', maxWidth: '400px', marginTop: '20px' }}>
                    <Typography>{t('email')}</Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="small" 
                        variant="outlined"
                        sx={{ marginBottom: '20px', borderRadius: '25px', backgroundColor: '#f7f7f7' }}
                        InputProps={{ style: { borderRadius: '25px' } }}
                    />
                    <Typography>{t('password')}</Typography>
                    <TextField
                        fullWidth
                        type="password"
                        size="small" 
                        placeholder="Enter here"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                        sx={{ borderRadius: '25px', backgroundColor: '#f7f7f7', marginBottom: '10px' }}
                        InputProps={{
                            style: { borderRadius: '25px' },
                        }}
                    />
                    <Link href="#" underline="none" sx={{ fontSize: '14px', display: 'block', textAlign: 'right', marginBottom: '10px' }}>
                    {t('forgot_password')}
                    </Link>
                </Box>

                <CustomButton
                onClick={handleLogin}
                 fullWidth 
                style={{ maxWidth: '400px' }}>
                   {t('login')}
                </CustomButton>

                <Typography sx={{ marginTop: '20px' ,fontSize: '14px'}}>
                {t('no_account')}{' '}
                    <Link href="#" underline="none">
                    {t('create_account')}
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default Login;

