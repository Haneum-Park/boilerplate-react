import { proxy } from 'valtio';

interface ProxyBtnLoad {
  isLoading: boolean;
}

export const proxyBtnLoad = proxy<ProxyBtnLoad>({ isLoading: false });

export function clearBtnLoad() {
  proxyBtnLoad.isLoading = false;
}
