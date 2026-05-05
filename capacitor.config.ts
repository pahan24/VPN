import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.psvpn.app',
  appName: 'PS VPN',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
