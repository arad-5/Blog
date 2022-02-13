const Text_detector = ({ text }) => {
  if (!text.text) {
    return <br />
  } else if (text.bold) {
    return <strong>{text.text}</strong>
  } else if (text.italic) {
    return <em>{text.text}</em>
  } else if (text.underline) {
    return <u>{text.text}</u>
  } else {
    return text.text
  }
}

export default Text_detector
