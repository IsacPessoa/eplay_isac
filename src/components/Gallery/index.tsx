import Section from '../Section'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import { Item, Items } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={hogwarts} alt="hogwarts legacy" />
      </Item>
      <Item>
        <img src={hogwarts} alt="hogwarts legacy" />
      </Item>
      <Item>
        <img src={hogwarts} alt="hogwarts legacy" />
      </Item>
      <Item>
        <img src={hogwarts} alt="hogwarts legacy" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
