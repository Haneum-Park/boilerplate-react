import $axios from '@util/axios.util';
import { cookies, regex } from '@util/common.util';

export type ParsedToken = {
  id: number;
  email: string;
  name: string;
  iat: number;
  exp: number;
  iss: string;
};

export function parseToken(key = 'accessToken'): ParsedToken | null {
  const token = cookies.get(key);
  if (token) {
    let jsonPayload = '';
    const base64Url = token.split('.')[1]?.replace(/-/g, '+').replace(/_/g, '/');
    window
      .atob(base64Url as string)
      .split('')
      .forEach((c) => {
        jsonPayload += `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
      });
    jsonPayload = decodeURIComponent(jsonPayload);
    return JSON.parse(jsonPayload);
  }
  return null;
}

export function validateToken(key = 'accessToken'): boolean {
  const parsedToken = parseToken(key);
  if (!parsedToken) return false;
  // ! Token Valid Check Start

  const { id, email, name, iat, exp, iss } = parsedToken;

  // ? Token Data Exist Check
  if (!id || !email || !name || !iat || !exp || !iss) return false;

  // ? id type check
  if (Number.isNaN(id)) return false;
  if (typeof Number(id) !== 'number') return false;

  // ? email regex check
  if (!regex.email.test(email)) return false;

  // ? name regex check
  if (!regex.name.test(name)) return false;

  // ? token valid time check
  if (iat > exp) return false;

  // ? token issuer check
  const issuer = 'monit.metu.ai';
  if (iss !== issuer) return false;

  return true;
}
