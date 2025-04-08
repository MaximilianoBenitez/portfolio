import React, { forwardRef, useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const practiceList = [
  {
    id: "todoList",
    link: "https://github.com/MaximilianoBenitez/TodoList",
    preview: `${process.env.PUBLIC_URL}/video1.mp4`,
    image: `${process.env.PUBLIC_URL}/imagen1.png`,
  },
  {
    id: "weatherApp",
    link: "https://github.com/MaximilianoBenitez/WeatherApp",
    preview: `${process.env.PUBLIC_URL}/video2.mp4`,
    image: `${process.env.PUBLIC_URL}/imagen2.png`,
  }
];

const Practice = forwardRef((props, ref) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section ref={ref} style={{ padding: '40px 0', backgroundColor: theme.palette.background.default }}>
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
                  playsInline
                  preload="none"
                  poster={practice.image}
                >
                  <source src={practice.preview.replace('.mp4', '.webm')} type="video/webm" />
                  <source src={practice.preview} type="video/mp4" />
                </CardMedia>
              ) : (
                <CardMedia sx={{ height: 350, objectFit: "cover" }}>
                  <img
                    src={practice.image}
                    alt={t(`practice.${practice.id}.title`)}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </CardMedia>
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
