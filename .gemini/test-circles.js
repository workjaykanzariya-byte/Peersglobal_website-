fetch('http://localhost:3000/circles')
  .then((res) => res.text())
  .then((html) => {
    console.log('Video count:', (html.match(/<video/g) || []).length)
    console.log('Has mask-image:', html.includes('mask-image'))
    console.log('Has video src homepage-hero-bg.mp4:', html.includes('homepage-hero-bg.mp4'))
    console.log('Has Different Industries:', html.includes('Different Industries'))
    console.log('Has IMPACT IN EVERY ROOM:', html.includes('IMPACT IN EVERY ROOM'))
  })
