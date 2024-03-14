import Markdown from "react-markdown"
import raw from "rehype-raw"

const MarkdownText = ({ children, fontSize }) => {
  return (
    <div style={{ fontSize: fontSize || 16 }}>
      <Markdown children={children} rehypePlugins={[raw]} />
    </div>
  )
}

export default MarkdownText
