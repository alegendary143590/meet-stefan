import MarkdownDisplay from "../markdown"

const Conversation = ()=>{

    const markdownContent = `- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨ 
> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.`;


    return(
        <div className="flex">
            <div className="basis-1/12">
                <img
                    height={50}
                    width={50}
                    src="/img/icons/user.png"
                />
            </div>
            <div className="bg-white basis-11/12 p-3 rounded-lg shadow-sm">
                <div className="prose">
                    <MarkdownDisplay markdownContent={markdownContent}/>
                </div>
                <div className="flex gap-2 pt-5">
                    {/* <img
                        height={24}
                        width={24}
                        className="cursor-pointer"
                        src="/img/icons/like.svg"
                    />
                    <img
                        height={24}
                        width={24}
                        className="cursor-pointer"
                        src="/img/icons/unlike.svg"
                    /> */}
                    <img
                        height={24}
                        width={24}
                        className="cursor-pointer"
                        src="/img/icons/copy.svg"
                    />
                    {/* <img
                        height={24}
                        width={24}
                        className="cursor-pointer"
                        src="/img/icons/share.svg"
                    /> */}
                </div>
            </div>
        </div>
    )
}
export default Conversation