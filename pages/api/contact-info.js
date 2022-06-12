
async function handler(req, res) {
    if (req.method === 'POST') {
        res.json({ message: "post request" })
    }

    else {
        const response = await fetch(`${process.env.url}/wp-json/wp/v2/info`)
        const data = await response.json()
        res.status(200).json({ data: data })
    }
}

export default handler
