import React, { useState } from 'react';
import { Box, Switch, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NotifiContent = () => {
    const [customerNotifications, setCustomerNotifications] = useState(true);
    const [employeeNotifications, setEmployeeNotifications] = useState(true);
    const [systemNotifications, setSystemNotifications] = useState(true);
    const { t } = useTranslation();

    return (
        <>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={10}>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="500px" mb={2}>
                <Typography>{t('customerNotifications')}</Typography>
                <Switch
                    checked={customerNotifications}
                    onChange={() => setCustomerNotifications(!customerNotifications)}
                    color="primary"
                />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="500px" mb={2}>
                <Typography>{t('employeeNotifications')}</Typography>
                <Switch
                    checked={employeeNotifications}
                    onChange={() => setEmployeeNotifications(!employeeNotifications)}
                    color="primary"
                />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="500px" mb={5}>
                <Typography>{t('systemNotifications')}</Typography>
                <Switch
                    checked={systemNotifications}
                    onChange={() => setSystemNotifications(!systemNotifications)}
                    color="primary"
                />
            </Box>
            <Button
                variant="contained"
                style={{
                    background: 'linear-gradient(135deg, #16e9c2, #23a3eb)',
                    color: '#fff',
                    borderRadius: '20px',
                    padding: '10px 50px',
                    textTransform: 'none'
                }}
            >
               {t('saveButton')}
            </Button>
        </Box>
        </>
    );
};

export default NotifiContent;

