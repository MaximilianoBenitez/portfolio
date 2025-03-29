import React, { forwardRef, useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const practiceList = [
  {
    id: "todoList",
    link: "https://github.com/MaximilianoBenitez/TodoList",
    preview: "/video1.mp4", 
    image: "/imagen1.png",  
  },
  {
    id: "weatherApp",
    link: "https://github.com/MaximilianoBenitez/WeatherApp",
    preview: "/video2.mp4",
    image: "/imagen2.png",
  }
];

const Practice = forwardRef((props, ref) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section ref={ref} sx={{ py: 5, backgroundColor: theme.palette.background.default }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: theme.palette.primary.main, mb: 4 }}>
        {t('practice.title')}
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {practiceList.map((practice, index) => (
          <Grid item xs={12} sm={6} key={practice.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                minHeight: 400,
                maxWidth: '90%',
                margin: "auto",
                boxShadow: 20,
                cursor: 'pointer',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index ? (
                <CardMedia
                  component="video"
                  height="350"
                  sx={{ height: 350, objectFit: "cover" }}
                  autoPlay
                  loop
                  muted
                  src={practice.preview} 
                />
              ) : (
                <CardMedia
                  component="img"
                  height="350"
                  sx={{ height: 350, objectFit: "cover" }}
                  image={practice.image}
                  alt={t(`practice.${practice.id}.title`)}
                />
              )}

              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>
                  {t(`practice.${practice.id}.title`)}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                  {t(`practice.${practice.id}.description`)}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  <strong>{t('practice.technologies')}:</strong> {t(`practice.${practice.id}.technologies`)}
                </Typography>
              </CardContent>

              <Button
                size="large"
                color="primary"
                href={practice.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  m: 2,
                  boxShadow: 3,
                  width: '90%',
                  '&:hover': { boxShadow: 6, transform: 'scale(1.05)' },
                }}
              >
                {t('practice.viewMore')}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
});

export default Practice;
