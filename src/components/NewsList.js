import React from 'react';
import PropTypes from 'prop-types'
import News from "./News";

const NewsList = ({news}) => {
    return (
        <div className="row">
            {news.map(news => (
                <News
                    key={news.url}
                    news={news}
                />
            ))}
        </div>
    );
};

NewsList.propTypes = {
    news: PropTypes.array.isRequired,
}

export default NewsList;
