import { Bing, Claude, Types, methods as llamaMethods } from '@ha0z1/llama-apis'

const methods = {}

;[Bing, Claude].forEach((LLaMA) => {
  const instance = new LLaMA()
  for (const method of llamaMethods) {
    Object.assign(methods, { [`LLaMA.${Types[LLaMA.type]}.${method}`]: instance[method].bind(instance) })
  }
})
export default () => {
  // document.documentElement.innerHTML = ''
  window.addEventListener('message', async (e) => {
    const { msg, uuid, onMessageUUID } = e.data
    // console.log(88888, JSON.stringify(e.data))
    const [method, ...args] = msg
    const replyMsg = (msg) => {
      e.source!.postMessage(
        {
          msg,
          uuid
        },
        e.origin as WindowPostMessageOptions
      )
    }
    try {
      console.log(8888, onMessageUUID, args[0])
      if (onMessageUUID && typeof args[0] === 'object' && !args[0].onMessage) {
        args[0].onMessage = (msg) => {
          // console.log(msg, e.source, 1111)

          e.source &&
            e.source.postMessage(
              {
                msg,
                uuid: onMessageUUID
              },
              e.origin as WindowPostMessageOptions
            )
        }
      }

      const data = await methods[method](...args)

      replyMsg({
        code: 200,
        msg: 'ok',
        data
      })
    } catch (err: any) {
      const msg = err.stack || err.message || err.toString()
      replyMsg({
        code: 500,
        msg: msg,
        data: undefined
      })
    }
  })
}
