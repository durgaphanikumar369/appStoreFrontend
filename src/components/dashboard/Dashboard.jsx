import  { useState, useEffect, useRef  } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, CssBaseline, Button, Drawer} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; 
import MenuList from '../menuList/MenuList';
import background from '../../assets/background.mp3'


const appData = [
  { id: 1, name: 'Facebook', category: 'Social', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', installed: false },
  { id: 2, name: 'Instagram', category: 'Social', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png', installed: true },
  { id: 3, name: 'WhatsApp', category: 'Messaging', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', installed: true },
  { id: 4, name: 'Twitter', category: 'Social', icon: 'https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000', installed: false },
  { id: 5, name: 'TikTok', category: 'Entertainment', icon: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg', installed: false },
  { id: 6, name: 'Snapchat', category: 'Social', icon: 'https://img.icons8.com/?size=100&id=U0k0LD1t8aHf&format=png&color=000000', installed: true },
  { id: 7, name: 'YouTube', category: 'Entertainment', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg', installed: false },
  { id: 8, name: 'Netflix', category: 'Entertainment', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', installed: true },
  { id: 9, name: 'Spotify', category: 'Music', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg', installed: true },
  { id: 10, name: 'Zoom', category: 'Productivity', icon: 'https://img.icons8.com/?size=100&id=82ewLsKHYlLc&format=png&color=000000', installed: true },
  { id: 11, name: 'Google Drive', category: 'Productivity', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png', installed: false },
  { id: 12, name: 'Gmail', category: 'Productivity', icon: 'https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000', installed: false },
  { id: 13, name: 'Microsoft Teams', category: 'Productivity', icon: 'https://img.icons8.com/?size=100&id=zQ92KI7XjZgR&format=png&color=000000', installed: true },
  { id: 14, name: 'Slack', category: 'Productivity', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png', installed: false },
  { id: 15, name: 'Uber', category: 'Transportation', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png', installed: false },
  { id: 16, name: 'Google Maps', category: 'Utilities', icon: 'https://img.icons8.com/?size=100&id=uzeKRJIGwbBY&format=png&color=000000', installed: true },
  { id: 17, name: 'Dropbox', category: 'Productivity', icon: 'https://img.icons8.com/?size=100&id=13657&format=png&color=000000', installed: false },
  { id: 18, name: 'Pinterest', category: 'Social', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png', installed: true },
  { id: 19, name: 'Reddit', category: 'Social', icon: 'https://img.icons8.com/?size=100&id=ncavSQSXHxd7&format=png&color=000000', installed: false },
  { id: 20, name: 'LinkedIn', category: 'Professional', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', installed: true },
];


function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [apps, setApps] = useState(appData);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInstall = (id) => {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, installed: true } : app
      )
    );
  };

  const handleUninstall = (id) => {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, installed: false } : app
      )
    );
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
    navigate('/login');
  };

  //Menu list
  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };


    // Play audio when the component mounts
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error('Audio playback failed:', error);
            });
        }
    }, []);

  

  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="static" sx={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)' }}>
        <Toolbar>
          
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            App Store Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer for Menu List */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
        <MenuList /> {/* Render CategoriesMenu inside Drawer */}
      </Drawer>

      {/* Background Music */}
      <audio ref={audioRef} src={background} loop />

      

      {/* Search Bar */}
      <motion.div
        className="glass-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: '80%', marginTop: '20px' }}
      >
        <input
          type="text"
          className="search-bar"
          placeholder="Search for apps..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </motion.div>

      {/* App List */}
      <motion.div
        className="glass-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: '80%' }}
      >
        <div className="app-list">
          {filteredApps.map((app) => (
            <motion.div
              className="app-card"
              key={app.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={app.icon} alt={app.name} />
              <h3>{app.name}</h3>
              {app.installed ? (
                <button
                  className="uninstall"
                  onClick={() => handleUninstall(app.id)}
                >
                  Uninstall
                </button>
              ) : (
                <button onClick={() => handleInstall(app.id)}>
                  Install
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Box>
  );
}

export default Dashboard;
