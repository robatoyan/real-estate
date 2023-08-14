import './style.css';

export const MyWord = () => {
    return (
        <div className="MyWord">
            <div className='WordLine'></div>
            <h2>You’re in good hands</h2>
            <p>
                Torquatos nostros? quos dolores eos, qui<br/>
                dolorem ipsum per se texit, ne ferae quidem se<br/>
                repellere, idque instituit docere sic: omne animal,<br/>
                simul atque integre iudicante itaque aiunt hanc<br/>
                quasi involuta aperiri, altera occulta quaedam et<br/>
                voluptatem accusantium doloremque.
            </p>
            <button>Learn more<i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
        </div>
    )
}