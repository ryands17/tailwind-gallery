import * as React from 'react'
import Card from 'components/Card'
import { Images } from 'types'

function App() {
  let [images, setImages] = React.useState<Images>([])
  let [query, setQuery] = React.useState('')

  React.useEffect(() => {
    let URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&image_type=photo`

    fetch(URL)
      .then(res => res.json())
      .then(res => setImages(res.hits))
      .catch(console.error)
  }, [query])

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <Card key={image.id} image={image} />
        ))}
      </div>
    </div>
  )
}

export default App
