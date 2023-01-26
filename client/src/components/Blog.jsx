import React from 'react'

function Blog() {
  return (
    <article className="blog">
          <div className="blogGraphics">
            <img
              src="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
            </div>
            <div className="articlemain">
              <h2>Article Title goes here mate</h2>
              <h5>
                <span className="bloguser">Ashiq Ullah</span>
                <i className="blogtime"> 27-Oct-2023</i>
              </h5>
              <p className="blogDescripton">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos quaerat recusandae reprehenderit eaque quo tempora.
              </p>
            </div>

        </article>
  )
}

export default Blog