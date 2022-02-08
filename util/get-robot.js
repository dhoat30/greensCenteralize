async function getRobot(robot) {
    let response
    await fetch(`${process.env.url}/wp-json/wp/v2/robots?slug=${robot}`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getRobot