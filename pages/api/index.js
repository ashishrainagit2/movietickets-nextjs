export default (req, res) => {
    // const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1')
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.json(JSON.stringify({ data: 'res' }))
  }