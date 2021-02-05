import { Image } from 'types'

type CardProps = {
  image: Image
}

const Card = ({ image }: CardProps) => {
  const tags = image.tags.split(', ')

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt={image.tags} className="w-full" />
      <div className="px-4 py-6">
        <div className="text-xl text-blue-400 font-semibold mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <span className="font-bold">Views</span>: {image.views}
          </li>
          <li>
            <span className="font-bold">Likes</span>: {image.likes}
          </li>
          <li>
            <span className="font-bold">Downloads</span>: {image.downloads}
          </li>
        </ul>

        <div className="py-6 flex space-x-4">
          {tags.map(tag => (
            <span
              key={tag}
              className="rounded-2xl bg bg-gray-200 text-gray-700 px-2 py-2 text-sm font-semibold"
            >
              #{tag.split(' ')[0]}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
