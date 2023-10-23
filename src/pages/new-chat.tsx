import Layout from "../components/Layout"
import Topic from "../components/cards/topic"

const NewChat = ()=>{
    return(
      <Layout>
        <div className="pt-5 px-3">
          <h1 className="text-[32px] sm:text-[32px] md:text-5xl font-bold">Hello again</h1>
          <p className="text-[#52525B] text-base sm:text-base md:text-xl font-normal py-4">Tell me what’s on your mind, or pick a suggestion. I have limitations and won’t always get it right, but your feedback will help me improve.</p>
          <div className="w-full sm:w-full md:w-10/12">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
              <Topic
                title="Artists"
                img="/img/icons/paint-brush.png"
                data={[
                  { title: "Spanish-language music artists" },
                  { title: "artists similar to The Beatles" },
                  { title: "Japanese music artists from the 1980s" },
                ]}
              />
              <Topic
                title="Music"
                img="/img/icons/music.png"
                data={[
                  { title: "Chill music artists for studying" },
                  { title: "Female R&B artists" },
                  { title: "Male country singers" },
                ]}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
}

export default NewChat