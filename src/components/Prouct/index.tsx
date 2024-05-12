import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt,
      aliquam fugit eligendi magni nostrum pariatur, excepturi incidunt commodi
      aperiam qui ea, unde nulla. Perspiciatis nemo mollitia temporibus neque
      exercitationem.
    </Descricao>
  </Card>
)

export default Product
