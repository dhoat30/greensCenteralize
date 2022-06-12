
async function handler(req, res) {
    if (req.method === 'POST') {
        const response = await fetch(`${process.env.url}/wp-json/webduel/v1/contact-form`, {
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        res.status(200).json({ data: data })
    }

    else {
        res.json({ message: "Get request" })
    }
}

export default handler
