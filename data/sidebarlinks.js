import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faTicketAlt, faLightbulb, faUsers, faUserTie, faBook, faCog, faAward } from '@fortawesome/free-solid-svg-icons';

export const links = [
  {
    icon: <FontAwesomeIcon icon={faChartPie} />,
    title: 'Overview',
    href: '/Overview',
  },
  {
    icon: <FontAwesomeIcon icon={faTicketAlt} />,
    title: 'Users',
    href: '/Patients',
  },
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: 'Link number 2',
    href: '/yuyu',
  },
  {
    icon: <FontAwesomeIcon icon={faUsers} />,
    title: 'Link number 3',
    href: '/yuyu',
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} />,
    title: 'Link number 4',
    href: '/yuyu',
  },
  {
    icon: <FontAwesomeIcon icon={faBook} />,
    title: 'Link number 5',
    href: '/yuyu',
  },
];

export const accountLinks = [
  {
    icon: <FontAwesomeIcon icon={faCog} />,
    title: 'Setting',
    href: '/yuyu',
  },
  {
    icon: <FontAwesomeIcon icon={faAward} />,
    title: 'Logout',
    href: '/yuyu',
  },

]