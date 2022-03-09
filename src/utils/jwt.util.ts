export type Token = {
  id: number;
  name: string;
  email: string;
  iat: number;
  exp: number;
  isadmin: boolean;
};

export function parseToken(token: string): Token {
  let jsonPayload = '';
  if (token) {
    const base64Url = token.split('.')[1]?.replace(/-/g, '+').replace(/_/g, '/');
    window
      .atob(base64Url as string)
      .split('')
      .forEach((c) => {
        jsonPayload += `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
      });
    jsonPayload = decodeURIComponent(jsonPayload);
  }

  return JSON.parse(jsonPayload);
}

export function validateToken(): boolean {
  const token = localStorage.getItem('token');
  if (token) {
    const { id, name, email, iat, exp, isadmin } = parseToken(token as string) as Token;
    if (!(typeof id === 'number')) return false;
    if (!(typeof name === 'string')) return false;
    if (!(typeof email === 'string')) return false;
    if (!(typeof isadmin === 'boolean')) return false;

    // TODO : iss 추가
    // if (!(typeof iss === 'string')) return false;
    // if (iss !== 'https://meetu.co.kr') return false;

    if (!(typeof iat === 'number')) return false;
    // TODO : 서버가 발행해주는 토큰의 유효기간 범위가 아닐경우의 예외처리

    if (!(typeof exp === 'number')) return false;
    const now = Math.round(new Date().getTime() / 1000);
    if (now > exp) return false;
    return true;
  }
  return false;
}
