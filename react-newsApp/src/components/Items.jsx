import Wrapper from "../assets/wrappers/Items"
import axiosClient from "../axios-client"
import { useState, useEffect } from "react"
import { Typography, IconButton, Card, CardHeader, CardMedia, CardContent, CardActions } from "@mui/material"
import Loading1 from './Loading1'
import Loading2 from './Loading2'
import Loading3 from './Loading3'
import FormRow from "./FormRow"
import FormRowSelect from "./FormRowSelect"
import ArticleModal from "./ArticleModal"


const Items = () => {

    const [newsSources, setNewsSources] = useState(null);
    const [selectedSource, setSelectedSource] = useState('');
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        async function fetchNewsSources() {
            try {
                setLoading(true);
                const response = await axiosClient.get('/sources');
                setNewsSources(response.data);
                setSelectedSource(response.data.sourceId || '');
            } catch (error) {
                console.error('Error fetching news sources:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchNewsSources();
    }, []);


    useEffect(() => {
        async function fetchNewsArticles() {
            try {
                setLoading(true);
                const response = await axiosClient.post('/sourceId', { source: selectedSource });
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching news articles:', error);
            } finally {
                setLoading(false);
            }
        }

        if (selectedSource) {
            fetchNewsArticles();
        }
    }, [selectedSource]);


    const handleSearchSources = (e) => {
        setSelectedSource(e.target.value);
    };

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };


    let SelectNewsSources = (
        <Loading2 />
    )

    if (newsSources) {
        SelectNewsSources = (
            <form className='form'>
                <h4>explor</h4>
                <div className='form-center'>
                    {/* search position */}

                    <FormRow
                        labelText='search base on title'
                        type='text'
                        name='search'
                        handleChange={handleSearchChange}
                    />
                    {/* search by Sources */}
                    <FormRowSelect
                        labelText='Sources'
                        name='selectedSource'
                        value={selectedSource}
                        handleChange={handleSearchSources}
                        list={newsSources.newsSources}
                    />
                </div>
            </form>
        )
    }


    let News = (
        <Loading1 />
    )


    if (articles) {

        const filteredNews = articles.news.filter(x => {
            if (query === '') {
                return true;
            } else if (x.title.toLowerCase().includes(query.toLowerCase())) {
                return true;
            }
            return false;
        });

        News = (
            <>

                {filteredNews.length > 0 ? (

                    filteredNews.map((newsContent, index) => (
                        <div className="grid-item" key={index}>
                            <Card sx={{ maxWidth: 400, height: 580 }}>

                                {loading ? (<Loading3 />) : (
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={newsContent.urlToImage}
                                        alt="img"
                                    />
                                )}
                                
                                <CardHeader
                                    title={
                                        <div className="news-title">
                                            {newsContent.title}
                                        </div>
                                    }
                                    subheader={
                                        <div className="news-author">
                                            {newsContent.author}
                                        </div>
                                    }
                                />


                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {newsContent.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton onClick={() => setSelectedArticle(newsContent)}>
                                        {
                                            <button className="cta">
                                                <span>more</span>
                                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                                    <path d="M1,5 L11,5"></path>
                                                    <polyline points="8 1 12 5 8 9"></polyline>
                                                </svg>
                                            </button>
                                        }
                                    </IconButton>

                                </CardActions>

                            </Card>
                        </div>
                    ))
                ) : (
                    <h1>No articles found...</h1>
                )}
                <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
            </>
        )
    }


    return (
        <Wrapper>
            {SelectNewsSources}

            <div className={articles ? 'grid-container' : ''}>
                {News}
            </div>
        </Wrapper>
    )
}

export default Items;
