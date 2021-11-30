

const server_ip = process.env.REACT_APP_BACKEND_SERVER
const port = process.env.REACT_APP_BACKEND_PORT
const remoteServer = `https://${server_ip}:${port}`

const BackendEndpoint = {
  career : `${remoteServer}/career`,
  education : `${remoteServer}/education`,
  certification : `${remoteServer}/certification`,
  project : `${remoteServer}/project`,
  login : `${remoteServer}/login`,
  image : `${remoteServer}/image`,
}

export default BackendEndpoint