
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import DateRangeIcon from '@mui/icons-material/DateRange';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const style = {
  background: "#1b0d01",
  height: "100%",
  paddingTop: "100px",
  paddingBottom: "100px",
  fontSize: "18px",
  fontFamily: "Red Hat Text,Arial,Helvetica,sans-serif",
  color: "#fff",
  overflowX: "hidden",
};

export const socialMediaIcons = [
  { icon: <FacebookIcon style={{ color: '#ff7531' }} />, key: 'facebook' },
  { icon: <InstagramIcon style={{ color: '#ff7531' }} />, key: 'instagram' },
  { icon: <TwitterIcon style={{ color: '#ff7531' }} />, key: 'twitter' },
];

export const menuItems = [
  'Privacy Policy',
  'FAQ',
  'Terms & Conditions',
  'Sitemap',
];

export const contactInfo = [
  { icon: <EmailIcon />, text: 'Make an enquiry', color: '#ff7531' },
  { icon: <PhoneIcon />, text: 'Choose Academy Phone', color: 'white' },
  { icon: <DateRangeIcon />, text: 'Mon-Fri 9am - 5pm', color: 'white' },
];

export const menuItems2 = [
  'About Us',
  'Join Us',
  'School Partnerships',
  'Franchise With Us',
  'FAQs',
  'Our Policies',
];

export const menuItems3 = [
  'Locations',
  'Shop',
  'News',
  '1-on-1 Training',
];
