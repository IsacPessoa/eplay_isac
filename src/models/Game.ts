class Game {
  category: string
  image: string
  description: string
  system: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    image: string,
    infos: string[],
    title: string,
    description: string,
    system: string
  ) {
    this.id = id
    this.category = category
    this.image = image
    this.infos = infos
    this.title = title
    this.description = description
    this.system = system
  }
}

export default Game
