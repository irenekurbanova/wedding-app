import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./Map.module.css";

const API_KEY = process.env.REACT_APP_YANDEX_API_KEY;

const AddressMap = (props) => {
  return (
    <YMaps query={{ apikey: API_KEY }}>
      <div className={styles.map}>
        <Map
          width={"100%"}
          defaultState={{
            center: [59.934073, 30.306274],
            zoom: 13,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark
            geometry={{ type: "Point", coordinates: [59.934018, 30.293809] }}
            options={{
              preset: "islands#redGlyphIcon",
              iconGlyph: "heart",
              iconGlyphColor: "red",
            }}
          />
          <Placemark
            geometry={{ type: "Point", coordinates: [59.93626, 30.321959] }}
          />
        </Map>
      </div>
    </YMaps>
  );
};

export default AddressMap;
