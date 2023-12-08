import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import demofooter from '../../images/demofooter.png';
import Div from '../../shared/Div/Div';
import { Typography } from '@mui/material';
import { style, menuItems, menuItems2, menuItems3,contactInfo, socialMediaIcons } from './Footerfunction';



export default function Footer() {
    return (
        <>
            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid item sm={4} display={'flex'} justifyContent={'center'}>
                        <Box>
                            <img style={{ paddingLeft: '25px' }} src={demofooter} alt='footer image' />
                            {contactInfo.map((info, index) => (
                                <Box key={index} sx={{ display: 'flex', mt: 5, pl: 2.9 }}>
                                    {info.icon}
                                    <Typography style={{ paddingLeft: 10, color: info.color }}>
                                        {info.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item sm={2}>

                    </Grid>
                    <Grid item sm={3} xs={8} sx={{ lineHeight: "62px", display: "flex", justifyContent: "center" }}>
                        <Div>
                            {menuItems2.map((item, index) => (
                                <Div key={index} sx={{ pb: 4 }}>
                                    <Typography>{item}</Typography>
                                </Div>
                            ))}
                        </Div>
                    </Grid>

                    <Grid item sm={3} xs={3} sx={{ lineHeight: "62px", display: "flex", justifyContent: "center" }}>
                        <Div>
                            {menuItems3.map((item, index) => (
                                <Div key={index} sx={{pb:4}}>
                                    <Typography>{item}</Typography>
                                </Div>
                            ))}
                        </Div>
                    </Grid>
                </Grid>
                <hr style={{ width: "80%", margin: "auto", }} />
                <Grid container spacing={2} sx={{ paddingTop: "25px", }}>
                    <Grid item sm={6} xs={12}>
                        <Box sx={{ paddingLeft: '20%', display: 'flex' }}>
                            {socialMediaIcons.map((socialMedia, index) => (
                                <Box key={socialMedia.key} sx={{ pr: index < socialMediaIcons.length - 1 ? 10 : 0 }}>
                                    {socialMedia.icon}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item sm={6} xs={10} sx={{ display: "flex", textAlign: "center", margin: "auto", gap: 4, flexDirection: { sm: 'row', flexWrap: "wrap" }, }}>
                        {menuItems.map((item, index) => (
                            <React.Fragment key={item}>
                                <Typography>{item}</Typography>
                                {index < menuItems.length - 1 && <Typography>|</Typography>}
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}