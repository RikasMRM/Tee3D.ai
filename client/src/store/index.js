import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#28282B',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: 'src/assets/r.png',
  fullDecal: 'src/assets/1682023.jpg',
});

export default state;