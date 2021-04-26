import Timer from './Timer'
import Word from './Word'
import '../../styles/board.scss'
function Board() {
    let words = [
        {word: 'ein Bleistift'}
    ]
    let synonyms = [
        {word: 'ein Griffel'},
        {word: 'die Schule'},
        {word: 'schribe'},
        {word: 'ein Radiegrummi'},
        {word: 'ein Radiegrummi'},
        {word: 'ein Radiegrummi'}
    ]
    
    return (
        
        <div className="board">
            <div className="board_container">
            <Timer/>
            <div className="board_row">
                <div className="board_column">
                    <div className='board_words'>
                        <div className="board_discribe"> Words</div>
                        <div className="words_container">
                            {words.map((el) => (
                                <Word
                                    text={el.word}
                                />
                            ))}
                        </div>

                    </div>
                    <div className='board_synonyms'>
                        <div className="board_discribe">Synonyms</div>
                        <div className="words_container">
                        {synonyms.map((el) => (
                                <Word
                                    text={el.word}
                                />
                        ))}
                        </div>
                    </div>

                </div>
                <div className="board_column">
                    <div className="board_info">
                        <p>Guessed synonym!</p>
                    </div>
                </div>
            </div>
            <div className="board_button">
                <button className="board_button-next">Next word</button>
                <p className="board_button-describe"></p>
            </div>
            </div>
        </div>
    );
}

export default Board;
