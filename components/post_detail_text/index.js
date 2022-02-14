import Blockquote from './Blockquote'
import Codeblock from './Codeblock'
import List from './List'
import Paragraph from './Paragraph'
import Text_detector from './Text_detector'
import Asset from './Asset'
const Post_paragraph = ({ text }) => {
  if (text.type === 'paragraph') {
    return text.children.map((child, index) => (
      <Text_detector key={index} text={child} />
    ))
  } 
  else if (text.type === 'image') {
    return <Asset asset={text} />
  }
  return null
}

export default Post_paragraph
