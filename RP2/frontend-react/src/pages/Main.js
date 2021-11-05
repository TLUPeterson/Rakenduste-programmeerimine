import { Layout } from "antd"
import { Content } from "antd/lib/layout/layout"
import { useState } from "react"

function Main(){
    const [magicNumber, setMagicNumber] = useState(0)
    const [show, setShow] = useState(true)

    return(
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        This is the
      <br />  Main Page
      </Content>
    </Layout>
    )
}

export default Main