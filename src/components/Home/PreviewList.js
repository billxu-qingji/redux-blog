import React from 'react';
import Preview from './Preview';
import PropTypes from 'prop-types';

export default class Preview extends React.PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    articleList: PropTypes.arrayOf(PropTypes.object),
    loadArticles: PropTypes.func,
  }
  componentDidMount() {
    this.props.loadArticles();
  }
  render() {
    const { loading, error, articleList } = this.props;

    if (error) {
      return <p className="message">oops, somethind is wrong</p>;
    }

    if (loading) {
      return <p className="message">loading.....</p>
    }

    return this.props.articleList.map(item => (
      <Preview {...item} key={item.id} />
    ))
  }
}