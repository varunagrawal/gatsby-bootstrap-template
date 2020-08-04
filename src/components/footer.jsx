import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "./link"

export function Footer(props) {
  return (
    <Container class="text-center">
      <br/><br/><br/>
      <br/><br/><br/>
      <p style={{textAlign:"center"}}>Built by <Link href="https://varunagrawal.github.io/">Varun Agrawal</Link> with ♥</p>
    </Container>
  )
}
