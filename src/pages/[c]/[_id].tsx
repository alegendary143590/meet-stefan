import Layout from "../../components/Layout"
import Conversation from "../../components/conversation"

const NewChat = ()=>{
    return(
      <Layout>
        <div className="pt-5 px-3">
          <Conversation/>
        </div>
      </Layout>
    )
}

export default NewChat