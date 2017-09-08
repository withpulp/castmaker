import React from 'react';
import './index.scss';

class Image extends React.Component {
  renderImage() {
    const { type, image } = this.props;

    if (image) {
      return <img className={type ? `${type} image` : `image`}
                  src={image} />;
    } else {
      return null;
    }
  }

  render() {
    const { type, figure } = this.props;
    let image;

    if (figure) {
      image = (
        <figure className={type ? `${type} image figure` : `image figure`}>
          { this.renderImage() }
        </figure>
      );
    } else {
      image = this.renderImage();
    }

    return image;
  }
}

export default Image;
