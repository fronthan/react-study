import React from 'react';
import "./Detail.scss";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;

        if ( location.state ) {
            const state = location.state;

            return (
                <main role="main" className="container">
                    <h2 className="movie_title">{state.titlelong}</h2>
                    <p className="movie_year">{state.year}</p>
                    <div className="desc_wrap">
                        <img src={state.postbg} alt={`${state.title} 포스터`} className="movie_poster"/>
                        <dl className="desc_area">
                            <dt className="desc_label">summary</dt>
                         
                         <dd className="summary">{state.summary}</dd>
                        </dl>
                        <dl className="desc_area genres_area">
                            <dt className="desc_label">장르</dt>                        
                            {
                                state.genres.map (genre => 
                                    <dd className="genre_item">{genre}</dd>
                                )
                            }
                        </dl>
                        <dl className="desc_area">
                            <dt className="desc_label">시놉시스</dt>
                        <dd className="synopsis">{state.synopsis}</dd>
                        </dl>
                    </div>
                </main>
            )
        } else {
            return null;
        }
    }
}

export default Detail;