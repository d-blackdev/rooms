import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms, loading } = this.context;
    const roomsList = rooms.map((room) => {
      return <Room key={room.id} {...room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : roomsList}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
