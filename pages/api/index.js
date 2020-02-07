import axios from 'axios';

const handleGet = () => axios('https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1',
)

export default async (req, res) => {
    const { method } = req
    console.log("2");
    switch (method) {
      case 'GET':
        const jsonResponse = await handleGet()
        res.json(jsonResponse.data)
        break
      case 'POST':
        res.json({ hello: 'POST!' })
        break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
  }
}
