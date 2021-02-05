import * as React from 'react'
import Card from 'components/Card'
import { Images } from 'types'
import Search from 'components/Search'
import MessageDisplay from 'components/MessageDisplay'

function App() {
  let [images, setImages] = React.useState<Images>([])
  let [loading, setLoading] = React.useState(false)
  let [query, setQuery] = React.useState('')

  const onSubmit = (value: string) => {
    setQuery(value)
  }

  React.useEffect(() => {
    setLoading(true)
    let URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&image_type=photo`

    fetch(URL)
      .then(res => res.json())
      .then(res => setImages(res.hits))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [query])

  return (
    <div className="container mx-auto">
      <Search onSubmit={onSubmit} />
      {!loading && !images.length && (
        <MessageDisplay>No images found!</MessageDisplay>
      )}
      {loading ? (
        <MessageDisplay>Loading...</MessageDisplay>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
