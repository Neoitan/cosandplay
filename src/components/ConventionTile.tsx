import React from "react";
import "./ConventionTile.scss";

class ConventionTile extends React.Component<{ props: any }> {
  state = {
    tileName: this.props.props.tileName,
    tileSubtitle: this.props.props.subtitle,
    tileLink: this.props.props.link,
  };

  render() {
    return (
      <div
        className="tile"
        style={{ backgroundImage: `url(${this.state.tileLink})` }}
      >
        {/* <div className="tile_name">{this.state.tileName}</div>
        <div className="tile_subtitle">{this.state.tileSubtitle}</div>
        <div className="tile_link">{this.state.tileLink}</div> */}
        <div className="tile_button">Accéder à la convention</div>
      </div>
    );
  }
}

export default ConventionTile;
