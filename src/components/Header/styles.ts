import style from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = style.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`
export const Links = style.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = style.li`
  margin-right: 16px;
`
export const LinkCart = style.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
