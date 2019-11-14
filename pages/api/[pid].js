export default (req, res) => {
    const {
      query: { pid },
    } = req
  console.log("jknm", pid)
    res.end(`Post: ${pid}`)
  }