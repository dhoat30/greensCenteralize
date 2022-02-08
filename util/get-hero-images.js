async function getHeroImage() {
    let response
    await fetch(`${process.env.url}/wp-json/wp/v2/hero_images`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getHeroImage