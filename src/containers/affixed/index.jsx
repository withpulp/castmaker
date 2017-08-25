import React from 'react';
import ReadNext from '../../components/read_next';
import ReadingTime from '../../components/reading_time/';
import config from '../../../data/config';
import './index.css';

class Affixed extends React.Component {
	// @TODO: render different components depending on page
	render() {
    const { data, location, type } = this.props;
    const post = data;
    if (!data.id) {
      data.id = location.pathname;
    }
    if (!data.id) {
      data.category_id = config.postDefaultCategoryID;
    }

		return (
      <section className={`affixed ${type} section`}>
				<ReadNext previous={data.frontmatter.previous} next={data.frontmatter.next} />
      </section>
    );
	}
};

export default Affixed;
