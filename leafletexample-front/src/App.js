import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { React, Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        // Special thanks to:
        // https://blog.logrocket.com/react-leaflet-tutorial/
        
        return (
            <>
                <div className="w3-black w3-container w3-center" style={{height:"80px",}}>
                    <h1>Dashboard</h1>
                </div>
                <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[51.505, -0.09]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
            </>
        );
    }
}
export default App;
