import React, { useState } from 'react';
import { Box, Switch, TextField, Button, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useTranslation } from 'react-i18next';

const SurveySettings = () => {
    const [surveyEnabled, setSurveyEnabled] = useState(true);
    const [ratingValue, setRatingValue] = useState(3);
    const [additionalComment, setAdditionalComment] = useState('');
    const { t } = useTranslation();
    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
            {/* Survey toggle */}
            <Box display="flex" alignItems="center" justifyContent="space-between" width="800px" mb={4}>
                <Typography width="300px">{t('sendSurvey')}</Typography>
                <Switch
                    checked={surveyEnabled}
                    onChange={() => setSurveyEnabled(!surveyEnabled)}
                    color="primary"
                />
            </Box>

            {/* Message about rating */}
            <Box display="flex" alignItems="center" justifyContent="space-between" width="800px" mb={4}>
                <Typography>{t('messageAboutRating')}</Typography>
                <Box width="50%" p={1} bgcolor="#f5f5f5" borderRadius="14px" height="90px">
                    <Typography fontSize="14px" >{t('rateExperience')}</Typography>
                    <Rating
                        value={ratingValue}
                        onChange={(event, newValue) => setRatingValue(newValue)}
                        precision={1}
                        size="small"
                    />
                </Box>
            </Box>

            {/* Additional comment */}
            <Box display="flex" alignItems="center" justifyContent="space-between" width="800px" mb={5}>
                <Typography>{t('additionalComment')}</Typography>
                <TextField
                    placeholder={t('commentPlaceholder')}
                    multiline
                    fullWidth
                    variant="outlined"
                    value={additionalComment}
                    onChange={(e) => setAdditionalComment(e.target.value)}
                    sx={{
                        bgcolor: '#f5f5f5',
                        borderRadius: '14px',
                        width: '50%',
                        '& .MuiOutlinedInput-root': {
                            border: 'none',
                            fontSize: '14px',
                            height: '100px',
                            '& fieldset': {
                                border: 'none',
                            },
                            alignItems: 'flex-start',
                            color: 'black',
                        },
                    }}
                    InputProps={{
                        sx: {
                            fontSize: '14px',
                            color: 'black',
                        },
                    }}
                />
            </Box>

            {/*button */}
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
    );
};

export default SurveySettings;
