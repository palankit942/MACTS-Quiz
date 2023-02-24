import React from 'react';
import "../styles/components.css";

function Rules({rulesHandler}) {
  return (
    <div className='screen-container'>
        <div className='rules-container dialog-container p-4 border-5'>
            <h4 className='rules-heading text-md'>Quiz Rules</h4>
            <div className='rules-list-container py-4 my-2'>
                <ol className='rules-list'>
                    <li className='rules-list-item'>For each correct answer 10 points are awarded.</li>
                    <li className='rules-list-item'>For each wrong answer no points are awarded.</li>
                    <li className='rules-list-item'>You cannot skip the question.</li>
                    <li className='rules-list-item'>Only 1 chance is there to answer the question so choose wisely.</li>
                    <li className='rules-list-item'>Once answered the question, next question will appear.</li>
                    <li className='rules-list-item'>After all the questions are answered you will be redirected to Result page.</li>
                </ol>
            </div>
            <button className='btn btn-success' onClick={rulesHandler}>OK</button>
        </div>
    </div>
  )
}

export {Rules};