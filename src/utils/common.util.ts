export const isProduction = (process.env.NODE_ENV || 'development') === 'production';

export function deepcopy<T>(obj: Record<string, any> | any[]): T | Record<string, any> {
  let clone: T | Record<string, any> = {};

  if (Array.isArray(obj)) clone = [];
  (Object.keys(obj) as Array<keyof typeof obj>).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null && !(obj[key] instanceof Date)) {
      clone[key] = deepcopy(obj[key]);
    } else if (obj[key] instanceof Date) clone[key] = String(obj[key]);
    else clone[key] = obj[key];
  });

  return clone;
}

export function objToQuery<T extends Record<string, any>>(obj: T): string {
  const query: string[] = [];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (typeof obj[key] !== 'object') {
      query.push(`${key}=${obj[key]}`);
    }
  });
  return query.join('&');
}

export function queryToObj<T>(query: string): T {
  const obj: T = {} as T;
  const queries = query.replace('?', '').split('&');
  queries.forEach((q) => {
    const [key, value] = q.split('=') as [string, any];
    obj[key as keyof T] = value;
  });
  return obj as T;
}

export function fmtBytes(bytes: number, decimals = 2): number {
  if (bytes === 0) return 0;
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / k ** i).toFixed(dm));
}

export const cookies = {
  set: (key: string, value: string, expTime: number) => {
    document.cookie = `${key}=${value}; expires=${new Date(
      Date.now() + expTime,
    ).toUTCString()} ;path=/`;
  },
  get: (key: string): string | null => {
    const value = document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);
    return value ? value[2] : null;
  },
  del: (key: string) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  },
};

export const regex = {
  // ? email
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
  // ? phone number xxx-xxxx-xxxx
  phone: /^\d{3}-\d{3,4}-\d{4}$/,
  // ? name (한글)
  name: /^[가-힣]{2,10}$/,
};
