import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import {
    Home as HomeIcon,
    Sync as SyncIcon,
    Chat as ChatIcon,
    BarChart as BarChartIcon,
    Assignment as AssignmentIcon,
    Settings as SettingsIcon,
    Folder as FolderIcon,
    DesktopWindows as DesktopWindowsIcon,
    FolderOpen as FolderOpenIcon,
    Lock as LockIcon,
} from '@mui/icons-material';

import { useTranslation } from 'react-i18next';


const DashboardLayoutBasic = ({ children }) => {
    const [selectedNav, setSelectedNav] = useState(null);
    const [selectedLink, setSelectedLink] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const { t } = useTranslation();

    const navLinks = {
        Home: [t('preferences'), t('notifications'), t('reviews')],
        Sync: ['Sync Settings', 'Data Backup', 'Sync History'],
        Chat: ['Conversations', 'Message Settings', 'Archived Chats'],
        BarChart: [],
        Assignment: [],
        Settings: [],
        Folder: [],
    };

    const handleNavClick = (navName) => {
        setSelectedNav(navName);
        setSelectedLink(null);
    };

    const handleLinkClick = (linkName) => {
        setSelectedLink(linkName);
        // Navigate to the corresponding path when a link is clicked
        navigate(`/${linkName}`);
    };
    //  navigate(`/${linkName.toLowerCase().replace(/ /g, '-')}`);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', backgroundColor: 'white', overflow: 'hidden', height: '100vh', margin: 0 }}>
            {/* Sidebar */}
            <div
                style={{
                    width: isDrawerOpen ? '250px' : '50px',
                    background: '#1a1a1a',
                    color: 'white',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: isDrawerOpen ? 'flex-start' : 'center',
                    padding: isDrawerOpen ? '20px 0 20px 20px' : '20px 0',
                    transition: 'width 0.3s',
                }}
            >
                {/* Logo and title */}
                <div
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '0', paddingBottom: '0', cursor: 'pointer' }}
                    onClick={toggleDrawer}
                >
                    <img
                        src="/EnzoAI.png"
                        alt="Logo"
                        style={{ width: '40px', height: '40px', borderRadius: '10%', marginRight: isDrawerOpen ? '10px' : '0' }}
                    />
                    {isDrawerOpen && <h2 style={{ margin: 0 }}>EnzoAI</h2>}
                </div>

                {/* Language Switcher */}
                {/* {isDrawerOpen && (
                    <div style={{ margin: '10px 0' }}>
                        <Button style={{
                                background: 'linear-gradient(135deg, #16e9c2, #23a3eb)',
                                color: '#fff',
                                borderRadius: '20px',
                                padding: '3px 10px',
                                fontSize: '10px',
                                textTransform: 'none',
                                marginRight: '5px'
                            }} onClick={() => changeLanguage('en')}>English</Button>
                        <Button style={{
                                background: 'linear-gradient(135deg, #16e9c2, #23a3eb)',
                                color: '#fff',
                                borderRadius: '20px',
                                padding: '3px 10px',
                                fontSize: '10px',
                                textTransform: 'none',
                                margin: 'auto'
                            }} onClick={() => changeLanguage('es')}>Français</Button>
                    </div>
                )} */}

                {/* Navigation icons */}
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', justifyContent: isDrawerOpen ? 'flex-start' : 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: isDrawerOpen ? '10px' : '0' }}>
                        {[
                            { name: 'Home', icon: <HomeIcon /> },
                            { name: 'Sync', icon: <SyncIcon /> },
                            { name: 'Chat', icon: <ChatIcon /> },
                            { name: 'BarChart', icon: <BarChartIcon /> },
                            { name: 'Assignment', icon: <AssignmentIcon /> },
                            { name: 'Settings', icon: <SettingsIcon /> },
                            { name: 'Folder', icon: <FolderIcon /> },
                        ].map((item) => (
                            <div key={item.name} onClick={() => handleNavClick(item.name)} style={{ display: 'flex', justifyContent: isDrawerOpen ? 'flex-start' : 'center' }}>
                                {React.cloneElement(item.icon, {
                                    style: {
                                        margin: '10px 0',
                                        color: selectedNav === item.name ? '#2196f3' : 'white',
                                        cursor: 'pointer',
                                    },
                                })}
                            </div>
                        ))}

                        {/* Spacing between top and bottom icons */}
                        <div style={{ marginTop: '6rem' }} />

                        {/* Bottom group of icons */}
                        {[
                            { name: 'DesktopWindows', icon: <DesktopWindowsIcon /> },
                            { name: 'FolderOpen', icon: <FolderOpenIcon /> },
                            { name: 'Lock', icon: <LockIcon /> },
                        ].map((item) => (
                            <div key={item.name} onClick={() => handleNavClick(item.name)} style={{ display: 'flex', justifyContent: isDrawerOpen ? 'flex-start' : 'center' }}>
                                {React.cloneElement(item.icon, {
                                    style: {
                                        margin: '10px 0',
                                        color: selectedNav === item.name ? '#2196f3' : 'white',
                                        cursor: 'pointer',
                                    },
                                })}
                            </div>
                        ))}
                    </div>

                    {/* Navigation links (shown only when drawer is open) */}
                    {isDrawerOpen && (
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                                {(navLinks[selectedNav] || []).map((navItem) => (
                                    <li
                                        key={navItem}
                                        onClick={() => handleLinkClick(navItem)}
                                        style={{
                                            padding: '10px 15px',
                                            cursor: 'pointer',
                                            color: 'white',
                                            backgroundColor: selectedLink === navItem ? '#2196f3' : 'transparent',
                                            borderRadius: '20px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {navItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, background: 'white', padding: 0, margin: 0, transition: 'margin-left 0.3s', marginLeft: isDrawerOpen ? '0' : '0px' }}>
                {/* Header */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: '#f3f4f6',
                        padding: '0px 10px',
                    }}
                >
                    <h5>{t('settings')}</h5>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            variant="contained"
                            style={{
                                background: 'linear-gradient(135deg, #16e9c2, #23a3eb)',
                                color: '#fff',
                                borderRadius: '20px',
                                padding: '3px 10px',
                                fontSize: '10px',
                                textTransform: 'none',
                                margin: 'auto'
                            }}
                        >
                           {t('install_code')}
                        </Button>
                        <img
                            src="/Account Avatar.png"
                            alt="profile"
                            style={{ borderRadius: '50%', marginRight: '10px', marginLeft: '10px' }}
                        />
                        <span> {t('musfq')}</span>
                    </div>
                </div>

                {/* Content */}
                <div style={{ marginTop: '20px' }}>
                    {/* {children} */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayoutBasic;
