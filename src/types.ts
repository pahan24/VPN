export type ServerStatus = 'online' | 'busy' | 'offline';

export interface Server {
  id: string;
  name: string;
  country: string;
  flag: string;
  latency: number;
  status: ServerStatus;
  isPremium: boolean;
}

export interface ConnectionStats {
  download: string;
  upload: string;
  ping: number;
  duration: string;
  ip: string;
  location: string;
}
