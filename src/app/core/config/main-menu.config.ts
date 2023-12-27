import { IMainMenuVoice } from 'src/app/shared/interfaces/i-main-menu-voice.interface';

export const MAIN_MENU_CONFIG: IMainMenuVoice[] = [
  {
    label: 'Notizie',
    iconName: 'newspaper',
    routerLink: 'news',
  },
  {
    label: 'Preferiti',
    iconName: 'favorites',
    routerLink: 'favorites',
  },
];
