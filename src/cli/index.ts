import net from 'net'
import { assert, processIsNode } from '..'
/**
 * The port is Free
 * @param port
 */
function isPortFree(port: number): Promise<boolean> {
  assert(processIsNode(), 'Current environment is Node')
  return new Promise((resolve) => {
    const server = net.createServer((socket) => {
      socket.write('Echo server\r\n')
      socket.pipe(socket)
    })

    server.listen(port, '127.0.0.1')
    server.on('error', () => {
      resolve(false)
    })
    server.on('listening', () => {
      server.close()
      resolve(true)
    })
  })
}

export async function findFreePort(port: number): Promise<number> {
  if (await isPortFree(port))
    return port

  return findFreePort(port + 1)
}
