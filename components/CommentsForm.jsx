import { useState, useRef, useEffect } from 'react'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [loclaStorage, setLoclaStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  const handleCommentSubmit = (e) => {
    setError(false)
    const { value: comment } = commentEl.current
    const { value: name } = commentEl.current
    const { value: email } = emailEl.current

    if (!comment || !nameEl || !emailEl) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    }
  }

  return (
    <div className="my-8 bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">CommentsForm</h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          rows="5"
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-800 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="py-2 "
          placeholder="Name:"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="py-2"
          placeholder="Email:"
          name="email"
        />
      </div>

      {error && <p className="text-xs text-red-500">All field are required.</p>}
      <div className="mt-8 flex items-center">
        <button
          type="button"
          onClick={(e) => handleCommentSubmit()}
          className="ease text-md inline-block cursor-pointer rounded-md bg-pink-600 px-6 py-3 text-white transition duration-200 hover:bg-indigo-900"
        >
          Submit comment
        </button>
        <input
          ref={storeDataEl}
          type="checkbox"
          id="storeData"
          name="storeData"
          value="true"
          className="ml-10 mr-2"
        />
        <label htmlFor="storeData" className="cursor-pointer text-gray-500">
          Save my email and name
        </label>
      </div>
      {showSuccessMessage && (
        <span className="float-right mt-3 text-xl font-semibold text-green-300"></span>
      )}
    </div>
  )
}

export default CommentsForm
