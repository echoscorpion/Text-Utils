import React from 'react'

export default function About() {
  return (
    <div className='container my-5'>
        <div className="row">
            <div className="col-12">
                <h1 className='text-center py-5'>
                    About Text Utils
                </h1>
                <p className="text-center py-5">
                Fast, reliable, and easy! <b>Text-Utils</b> brings several free online tools to assist developers in daily tasks.
                </p>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100 text-bg-primary">
                <div className="card-body text-center">
                    <h2 className="card-title">Fast</h2>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 text-bg-secondary">
                <div className="card-body text-center">
                    <h2 className="card-title">Easy</h2>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 text-bg-success">
                <div className="card-body text-center">
                    <h2 className="card-title">Awsome</h2>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
