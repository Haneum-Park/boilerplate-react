/* eslint-disable no-plusplus */
import publicIp from 'public-ip';

export function setComma(value: number): string {
  if (value) {
    return value.toLocaleString('ko-KR');
  }
  return '0';
}

export function fixRounder(value: number, round = 3): number {
  if (value) {
    const changeValue = value.toFixed(round);
    return +changeValue;
  }
  return 0;
}

export function deepcopy(obj: Record<string, any> | any[]): any {
  let clone: Record<string, any> = {};

  if (Array.isArray(obj)) clone = [];
  (Object.keys(obj) as Array<keyof typeof obj>).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null && !(obj[key] instanceof Date)) {
      clone[key] = deepcopy(obj[key]);
    } else clone[key] = obj[key];
  });

  return clone;
}

export function queryToString(obj: Record<string, any>): string {
  if (Object.keys(obj).length > 0) {
    const clone: string[] = [];
    (Object.keys(obj) as Array<keyof typeof obj>).forEach((key) => {
      if (key === 'startDate' || key === 'endDate') {
        clone.push(`${key}=${obj[key]?.getTime()}`);
      } else {
        clone.push(`${key}=${obj[key]}`);
      }
    });
    return clone.join('&');
  }
  return '';
}

export async function getIPAddress(): Promise<string> {
  const res = await publicIp.v4();
  return res;
}

export function queryEncodeTokenizer(query: Record<string, any>) {
  if (query && Object.keys(query).length > 0) {
    const clone: string[] = [];
    Object.entries(query).forEach(([key, value]) => {
      clone.push(`${window.btoa(key)}=${window.btoa(String(value))}`);
    });
    return clone.join('&');
  }
  return null;
}

export function tokenizerDecodeQuery(query: Record<string, any>) {
  if (query && Object.keys(query).length > 0) {
    const clone: Record<string, any> = {};
    Object.entries(query).forEach(([key, value]) => {
      clone[window.atob(key)] = window.atob(value.substring(1));
    });
    return clone;
  }
  return null;
}

export function dataURLtoFile(dataurl: string, fileName: string): File | null {
  if (dataurl) {
    const arr = dataurl.split(',') as string[] | any[];
    if (arr && typeof arr === 'object' && arr.length > 0) {
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = window.atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], fileName, { type: mime });
    }
  }
  return null;
}
