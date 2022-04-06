import { getOrLoadRemote } from './getOrLoadRemote'

export const loadReactComponent = (remote, sharedScope, module, url) => {
  return async () => {
    await getOrLoadRemote(remote, sharedScope, url)
    const container = window[remote]
    const factory = await container.get(module)
    const Module = factory()
    return Module
  }
}

export const loadSveltComponent = async (remote, sharedScope, module, url) => {
  await getOrLoadRemote(remote, sharedScope, url)
  const container = window[remote]
  const factory = await container.get(module)
  const Module = factory()
  return Module
}
