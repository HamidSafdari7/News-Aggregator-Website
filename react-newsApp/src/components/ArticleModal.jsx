import Wrapper from "../assets/wrappers/ArticleModal"


const ArticleModal = ({ article, onClose }) => {

    let modal = ''

    if (article) {
        modal = (

            <div className="modal" open={Boolean(article)}>
                <div className="modal-content">
                    <span className="close" onClick={onClose}>
                        &times;
                    </span>
                    <div className='modal-infoes'>

                        <h3>{article.title}</h3>
                        <img className="modal-img" src={article.urlToImage} alt={article.title} />
                        <p>{article.content}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <Wrapper>
            {modal}
        </Wrapper>

    )
}

export default ArticleModal
