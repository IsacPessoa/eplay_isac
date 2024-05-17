import Section from '../Section'
import { Item, Items, Action, Modal, ModalContent } from './styles'

import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/close.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

type Props = {
  defaultCover: string
  name: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/78CP8na1Fpo?si=jPpy-bp_zi6i9QGt'
  }
]

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Fechar" />
          </header>
          <img src={hogwarts} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
